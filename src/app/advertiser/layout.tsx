'use client';

import React from 'react';
import { Sidebar } from '@/components/ui';
import {
  LayoutDashboard,
  Megaphone,
  DollarSign,
  QrCode,
  Shield,
  BarChart3,
  Users,
  Coins,
  Bell,
  User,
  Settings
} from 'lucide-react';

const sidebarItems = [
  { href: '/advertiser', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/advertiser/campaigns', label: 'Campanhas', icon: Megaphone },
  { href: '/advertiser/cashbacks', label: 'Cashbacks', icon: DollarSign },
  { href: '/advertiser/coupon-validation', label: 'Validação de Cupom', icon: QrCode },
  { href: '/advertiser/moderation', label: 'Moderação', icon: Shield },
  { href: '/advertiser/analytics', label: 'Análises', icon: BarChart3 },
  { href: '/advertiser/crm', label: 'CRM', icon: Users },
  { href: '/advertiser/credits', label: 'Rifas', icon: Coins },
  { href: '/advertiser/notifications', label: 'Notificações', icon: Bell },
  { href: '/advertiser/profile', label: 'Perfil', icon: User },
  { href: '/advertiser/settings', label: 'Configurações', icon: Settings },
];

export default function AdvertiserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar 
        title="Painel do Anunciante" 
        items={sidebarItems}
        logo={
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Megaphone className="w-4 h-4 text-white" />
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