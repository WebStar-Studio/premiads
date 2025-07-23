import React from 'react';
import { Card, Button } from '@/components/ui';
import { BarChart3, Users, TrendingUp, Plus } from 'lucide-react';

export default function AdvertiserDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-2">
            Bem-vindo ao painel do anunciante. Acompanhe suas campanhas e performance.
          </p>
        </div>
        <Button icon={Plus}>Nova Campanha</Button>
      </div>

      {/* Métricas de Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Campanhas Ativas</p>
              <p className="text-2xl font-bold text-white mt-1">12</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Alcance Total</p>
              <p className="text-2xl font-bold text-white mt-1">1.2M</p>
            </div>
            <Users className="w-8 h-8 text-orange-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">ROI Médio</p>
              <p className="text-2xl font-bold text-white mt-1">4.8x</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </Card>
      </div>

      {/* Saldo de Rifas */}
      <Card className="p-6" gradient="purple">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">Saldo de Rifas</h2>
            <p className="text-purple-200 mt-2">Rifas disponíveis para campanhas</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">2.340</p>
            <Button variant="outline" size="sm" className="mt-2">Comprar Mais</Button>
          </div>
        </div>
      </Card>

      {/* Atividade Recente */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
            <div>
              <p className="text-white">Nova submissão em "Campanha de Verão"</p>
              <p className="text-slate-400 text-sm">Há 2 horas</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
            <div>
              <p className="text-white">Campanha "Black Friday" foi aprovada</p>
              <p className="text-slate-400 text-sm">Há 4 horas</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-white">10 novos participantes em "Promoção Especial"</p>
              <p className="text-slate-400 text-sm">Ontem</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 