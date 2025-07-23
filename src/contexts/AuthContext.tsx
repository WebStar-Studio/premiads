'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, AuthState, LoginData, RegisterData, User } from '@/types/auth';
import { supabase, roleMapping, reverseRoleMapping } from '@/lib/supabase/config';
import type { AuthError } from '@supabase/supabase-js';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Função para traduzir erros do Supabase para português
const getAuthErrorMessage = (error: AuthError): string => {
  switch (error.message) {
    case 'Invalid login credentials':
      return 'Email ou senha incorretos';
    case 'Email not confirmed':
      return 'Email não confirmado. Verifique sua caixa de entrada';
    case 'User already registered':
      return 'Este email já está cadastrado';
    case 'Password should be at least 6 characters':
      return 'A senha deve ter pelo menos 6 caracteres';
    case 'Invalid email':
      return 'Email inválido';
    case 'Signup not allowed for this instance':
      return 'Cadastro não permitido neste momento';
    default:
      return error.message || 'Erro desconhecido';
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });

  // Verificar se existe sessão do Supabase ao inicializar
  useEffect(() => {
    const checkSupabaseSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          setState(prev => ({ ...prev, isLoading: false }));
          return;
        }

        if (session?.user) {
          // Buscar dados do perfil do usuário
          const { data: profile, error: profileError } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profileError) {
            console.error('Error fetching user profile:', profileError);
            setState(prev => ({ ...prev, isLoading: false }));
            return;
          }

          const user: User = {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            userType: reverseRoleMapping[profile.role as keyof typeof reverseRoleMapping],
            createdAt: new Date(profile.created_at || ''),
            updatedAt: new Date(profile.updated_at || ''),
            isActive: true
          };

          setState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } else {
          setState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Error checking Supabase session:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkSupabaseSession();

    // Escutar mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        
        if (event === 'SIGNED_IN' && session?.user) {
          // Buscar dados do perfil
          const { data: profile } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profile) {
            const user: User = {
              id: profile.id,
              name: profile.name,
              email: profile.email,
              userType: reverseRoleMapping[profile.role as keyof typeof reverseRoleMapping],
              createdAt: new Date(profile.created_at || ''),
              updatedAt: new Date(profile.updated_at || ''),
              isActive: true
            };

            setState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null
            });
          }
        } else if (event === 'SIGNED_OUT') {
          setState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null
          });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (data: LoginData): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new Error(getAuthErrorMessage(error));
      }

      if (!authData.user) {
        throw new Error('Erro ao fazer login. Tente novamente.');
      }

      // Buscar dados do perfil do usuário
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError) {
        console.error('Error fetching user profile:', profileError);
        throw new Error('Erro ao carregar dados do usuário');
      }

      const user: User = {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        userType: reverseRoleMapping[profile.role as keyof typeof reverseRoleMapping],
        createdAt: new Date(profile.created_at || ''),
        updatedAt: new Date(profile.updated_at || ''),
        isActive: true
      };

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  };

  const register = async (data: RegisterData): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Registrar usuário no Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (authError) {
        throw new Error(getAuthErrorMessage(authError));
      }

      if (!authData.user) {
        throw new Error('Erro ao criar conta. Tente novamente.');
      }

      // Criar perfil do usuário na tabela user_profiles
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email: data.email,
          name: data.name,
          role: roleMapping[data.userType],
        });

      if (profileError) {
        console.error('Error creating user profile:', profileError);
        // Tentar fazer cleanup do usuário auth se o profile falhou
        await supabase.auth.signOut();
        throw new Error('Erro ao criar perfil do usuário');
      }

      // Buscar o perfil criado para retornar os dados completos
      const { data: profile, error: fetchError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (fetchError || !profile) {
        throw new Error('Erro ao carregar dados do usuário');
      }

      const user: User = {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        userType: reverseRoleMapping[profile.role as keyof typeof reverseRoleMapping],
        createdAt: new Date(profile.created_at || ''),
        updatedAt: new Date(profile.updated_at || ''),
        isActive: true,
        referredBy: data.referralCode || undefined
      };

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao criar conta';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Error signing out:', error);
      }

      // O estado será atualizado automaticamente pelo onAuthStateChange
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Forçar limpeza local mesmo se houver erro
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      });
    }
  };

  const clearError = (): void => {
    setState(prev => ({ ...prev, error: null }));
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 