'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export const useAuthRedirect = () => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Aguardar carregamento inicial
    if (isLoading) return;

    // Se usuário está autenticado, redirecionar para dashboard apropriado
    if (isAuthenticated && user) {
      const currentPath = window.location.pathname;
      
      // Se já está em uma página de auth, redirecionar para dashboard
      if (currentPath.startsWith('/auth/')) {
        switch (user.userType) {
          case 'advertiser':
            router.push('/advertiser');
            break;
          case 'participant':
            router.push('/user');
            break;
          case 'admin':
            router.push('/admin');
            break;
          default:
            router.push('/user');
        }
      }
    }
  }, [user, isAuthenticated, isLoading, router]);
};

// Hook para proteger rotas autenticadas
export const useAuthGuard = (requiredRole?: string) => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    // Se não está autenticado, redirecionar para login
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    // Se tem role específico requerido, verificar permissão
    if (requiredRole && user?.userType !== requiredRole) {
      // Redirecionar para dashboard apropriado
      switch (user?.userType) {
        case 'advertiser':
          router.push('/advertiser');
          break;
        case 'participant':
          router.push('/user');
          break;
        case 'admin':
          router.push('/admin');
          break;
        default:
          router.push('/auth/login');
      }
    }
  }, [user, isAuthenticated, isLoading, requiredRole, router]);

  return { user, isAuthenticated, isLoading };
}; 