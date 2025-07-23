'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { User, Mail, Lock, Eye, EyeOff, Users, Megaphone, Tag } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { UserType } from '@/types/auth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error } = useAuth();
  
  // Redirecionar automaticamente se já está autenticado
  useAuthRedirect();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'participant' as UserType,
    referralCode: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleUserTypeChange = (type: UserType) => {
    setFormData(prev => ({
      ...prev,
      userType: type
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        userType: formData.userType,
        referralCode: formData.referralCode || undefined
      });
      
      // A página será redirecionada automaticamente após o registro bem-sucedido
      
    } catch (error) {
      console.error('Register error:', error);
      setErrors({ general: 'Erro ao criar conta. Tente novamente.' });
    }
  };

  return (
    <Card className="p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Crie sua conta
        </h2>
        <p className="text-slate-400">
          Junte-se à plataforma PremiAds
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {(errors.general || error) && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {errors.general || error}
          </div>
        )}

        {/* Seleção do tipo de usuário */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Tipo de conta
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleUserTypeChange('participant')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.userType === 'participant'
                  ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                  : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
              }`}
              disabled={isLoading}
            >
              <Users className="h-6 w-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Participante</div>
              <div className="text-xs text-slate-400 mt-1">
                Participe de campanhas e ganhe recompensas
              </div>
            </button>
            
            <button
              type="button"
              onClick={() => handleUserTypeChange('advertiser')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.userType === 'advertiser'
                  ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                  : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
              }`}
              disabled={isLoading}
            >
              <Megaphone className="h-6 w-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Anunciante</div>
              <div className="text-xs text-slate-400 mt-1">
                Crie campanhas publicitárias
              </div>
            </button>
          </div>
        </div>

        <Input
          label="Nome completo"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Seu nome completo"
          icon={User}
          error={errors.name}
          disabled={isLoading}
        />

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
            placeholder="Mínimo 6 caracteres"
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

        <div className="relative">
          <Input
            label="Confirmar senha"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Digite a senha novamente"
            icon={Lock}
            error={errors.confirmPassword}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-slate-400 hover:text-white transition-colors"
            disabled={isLoading}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Input
          label="Código de referência (opcional)"
          type="text"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleInputChange}
          placeholder="Digite o código se tiver um"
          icon={Tag}
          disabled={isLoading}
        />

        <div className="pt-2">
          <Button
            type="submit"
            variant={formData.userType === 'advertiser' ? 'orange' : 'purple'}
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </div>

        <div className="text-xs text-slate-400 text-center">
          Ao criar uma conta, você concorda com nossos{' '}
          <Link href="/terms" className="text-purple-400 hover:text-purple-300">
            Termos de Uso
          </Link>{' '}
          e{' '}
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
            Política de Privacidade
          </Link>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-slate-400">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            Faça login
          </Link>
        </p>
      </div>
    </Card>
  );
} 