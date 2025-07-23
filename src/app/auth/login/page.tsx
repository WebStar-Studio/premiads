'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();
  
  // Redirecionar automaticamente se já está autenticado
  useAuthRedirect();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpar erro do campo quando começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe
      });
      
      // A página será redirecionada automaticamente pelo useEffect no layout
      // baseado no tipo de usuário após o login bem-sucedido
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Erro ao fazer login. Tente novamente.' });
    }
  };

  return (
    <Card className="p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Bem-vindo de volta!
        </h2>
        <p className="text-slate-400">
          Faça login para acessar sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {(errors.general || error) && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {errors.general || error}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="seu@email.com"
          icon={Mail}
          error={errors.email}
          disabled={isLoading}
        />

        <div className="relative">
          <Input
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Sua senha"
            icon={Lock}
            error={errors.password}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-slate-400 hover:text-white transition-colors"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-slate-400">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="rounded border-slate-700 bg-slate-800 text-purple-500 focus:ring-purple-500"
              disabled={isLoading}
            />
            <span>Lembrar de mim</span>
          </label>
          <Link href="/auth/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">
            Esqueceu a senha?
          </Link>
        </div>

        <Button
          type="submit"
          variant="purple"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-slate-400">
          Não tem uma conta?{' '}
          <Link href="/auth/register" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            Cadastre-se
          </Link>
        </p>
      </div>
    </Card>
  );
} 