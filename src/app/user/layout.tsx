'use client';

import React from 'react';
import { Sidebar } from '@/components/ui';
import {
  LayoutDashboard,
  Target,
  Gift,
  Trophy,
  UserPlus,
  DollarSign,
  User,
  Bell,
  HelpCircle
} from 'lucide-react';

const sidebarItems = [
  { href: '/user', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/user/missions', label: 'Missões', icon: Target },
  { href: '/user/rewards', label: 'Recompensas', icon: Gift },
  { href: '/user/raffles', label: 'Sorteios', icon: Trophy },
  { href: '/user/referrals', label: 'Indicações', icon: UserPlus },
  { href: '/user/cashback', label: 'Cashback', icon: DollarSign },
  { href: '/user/profile', label: 'Perfil', icon: User },
  { href: '/user/notifications', label: 'Notificações', icon: Bell },
  { href: '/user/support', label: 'Suporte', icon: HelpCircle },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar 
        title="Painel do Usuário" 
        items={sidebarItems}
        logo={
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-purple-500 rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
        }
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 