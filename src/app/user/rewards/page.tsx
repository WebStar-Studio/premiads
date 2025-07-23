import React from 'react';
import { Card, Button } from '@/components/ui';
import { Gift, ShoppingBag, Smartphone, Coffee, Ticket, Star } from 'lucide-react';

export default function RewardsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Recompensas</h1>
          <p className="text-slate-400 mt-2">
            Troque seus pontos por produtos, descontos e experiências exclusivas.
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-400">Seus pontos</p>
          <p className="text-2xl font-bold text-purple-400">2.847</p>
        </div>
      </div>

      {/* Filtros */}
      <Card className="p-4">
        <div className="flex gap-4">
          <Button size="sm">Todos</Button>
          <Button variant="outline" size="sm">Descontos</Button>
          <Button variant="outline" size="sm">Produtos</Button>
          <Button variant="outline" size="sm">Experiências</Button>
          <Button variant="outline" size="sm">Cashback</Button>
        </div>
      </Card>

      {/* Catálogo de Recompensas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">iPhone 15 Pro</h3>
          <p className="text-slate-400 text-sm mb-4">
            Último modelo da Apple com todas as funcionalidades premium
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-purple-400">25.000</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button className="w-full" disabled>
            Pontos insuficientes
          </Button>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Ticket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Cupom 20% OFF</h3>
          <p className="text-slate-400 text-sm mb-4">
            Desconto de 20% em toda a loja, válido por 30 dias
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-orange-400">500</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button variant="orange" className="w-full">
            Resgatar
          </Button>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Café Premium</h3>
          <p className="text-slate-400 text-sm mb-4">
            Café especial da Starbucks - 1kg de grãos selecionados
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-green-400">1.200</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button className="w-full">
            Resgatar
          </Button>
        </Card>

        <Card className="p-6 text-center border-yellow-500/20" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Experiência VIP</h3>
          <p className="text-slate-400 text-sm mb-4">
            Acesso exclusivo a evento especial + jantar premium
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-yellow-400">3.000</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button variant="orange" className="w-full">
            Resgatar
          </Button>
          <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs rounded-full mt-2">
            🔥 LIMITADO
          </span>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Vale Compras</h3>
          <p className="text-slate-400 text-sm mb-4">
            Vale de R$ 100 para usar em lojas parceiras
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-blue-400">2.000</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button className="w-full">
            Resgatar
          </Button>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Kit Beleza</h3>
          <p className="text-slate-400 text-sm mb-4">
            Kit completo de produtos de beleza premium
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-pink-400">1.500</span>
            <span className="text-slate-400">pontos</span>
          </div>
          <Button className="w-full">
            Resgatar
          </Button>
        </Card>
      </div>

      {/* Meus Cupons */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Meus Cupons</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">15% OFF</h3>
                  <p className="text-slate-400 text-sm">ModaStyle Brasil</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Ativo
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Válido até 31/03/2024
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Usar Agora</Button>
              <Button variant="outline" size="sm">Copiar Código</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">R$ 50 OFF</h3>
                  <p className="text-slate-400 text-sm">TechCorp Brasil</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                Ativo
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Válido até 15/04/2024
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Usar Agora</Button>
              <Button variant="outline" size="sm">Copiar Código</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Histórico de Resgates */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Histórico de Resgates</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Ticket className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Cupom 20% OFF - Loja Parceira</p>
                <p className="text-slate-400 text-sm">500 pontos utilizados</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 2 dias</p>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Café Premium - Starbucks</p>
                <p className="text-slate-400 text-sm">1.200 pontos utilizados</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 1 semana</p>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Vale Compras R$ 50</p>
                <p className="text-slate-400 text-sm">1.000 pontos utilizados</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 2 semanas</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 