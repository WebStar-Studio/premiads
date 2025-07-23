import React from 'react';
import { Card, Button } from '@/components/ui';
import { Plus, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function CashbacksPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Cashbacks</h1>
          <p className="text-slate-400 mt-2">
            Gerencie suas campanhas de cashback e monitore o desempenho.
          </p>
        </div>
        <Button icon={Plus}>Nova Campanha de Cashback</Button>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6" gradient="orange">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-200 text-sm">Cashback Total Distribuído</p>
              <p className="text-2xl font-bold text-white mt-1">R$ 12.450</p>
            </div>
            <DollarSign className="w-8 h-8 text-orange-300" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Taxa de Resgate</p>
              <p className="text-2xl font-bold text-white mt-1">84.2%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Usuários Ativos</p>
              <p className="text-2xl font-bold text-white mt-1">1,847</p>
            </div>
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </Card>
      </div>

      {/* Campanhas de Cashback */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Campanhas Ativas</h2>
        
        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">Cashback Produtos Eletrônicos</h3>
              <p className="text-slate-400 mt-2">
                5% de cashback em todos os produtos da categoria eletrônicos
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-slate-400 text-sm">Percentual</p>
                  <p className="text-white font-medium">5%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Limite por usuário</p>
                  <p className="text-white font-medium">R$ 200</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Total distribuído</p>
                  <p className="text-white font-medium">R$ 8.720</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Válido até</p>
                  <p className="text-white font-medium">31/12/2024</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Editar</Button>
              <Button variant="outline" size="sm">Pausar</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">Cashback Primeira Compra</h3>
              <p className="text-slate-400 mt-2">
                10% de cashback para novos clientes na primeira compra
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-slate-400 text-sm">Percentual</p>
                  <p className="text-white font-medium">10%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Limite por usuário</p>
                  <p className="text-white font-medium">R$ 100</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Total distribuído</p>
                  <p className="text-white font-medium">R$ 3.730</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Usuários únicos</p>
                  <p className="text-white font-medium">186</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Editar</Button>
              <Button variant="outline" size="sm">Pausar</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 