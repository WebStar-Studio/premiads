import React from 'react';
import { Card, Button } from '@/components/ui';
import { Coins, ShoppingCart, History, CreditCard, Zap } from 'lucide-react';

export default function CreditsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Rifas</h1>
        <p className="text-slate-400 mt-2">
          Compre e gerencie suas rifas (créditos) para usar em campanhas.
        </p>
      </div>

      {/* Saldo Atual */}
      <Card className="p-6" gradient="purple">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">2.340 Rifas</h2>
              <p className="text-purple-200">Saldo disponível para campanhas</p>
            </div>
          </div>
          <Button size="lg" icon={ShoppingCart}>Comprar Rifas</Button>
        </div>
      </Card>

      {/* Pacotes de Rifas */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Pacotes Disponíveis</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:border-purple-500/50 transition-colors" hover>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Pacote Básico</h3>
            <p className="text-3xl font-bold text-white mb-2">500 Rifas</p>
            <p className="text-slate-400 mb-4">Ideal para campanhas pequenas</p>
            <p className="text-2xl font-bold text-purple-300 mb-4">R$ 49,90</p>
            <Button className="w-full">Comprar Agora</Button>
          </Card>
          
          <Card className="p-6 text-center hover:border-orange-500/50 transition-colors border-orange-500/50" hover gradient="orange">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded-full">
                Mais Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Pacote Pro</h3>
            <p className="text-3xl font-bold text-white mb-2">1.500 Rifas</p>
            <p className="text-orange-200 mb-4">Melhor custo-benefício</p>
            <p className="text-2xl font-bold text-orange-300 mb-4">R$ 129,90</p>
            <Button variant="orange" className="w-full">Comprar Agora</Button>
          </Card>
          
                     <Card className="p-6 text-center hover:border-purple-500/50 transition-colors" hover>
             <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
               <Zap className="w-6 h-6 text-white" />
             </div>
             <h3 className="text-lg font-semibold text-white mb-2">Pacote Enterprise</h3>
             <p className="text-3xl font-bold text-white mb-2">5.000 Rifas</p>
             <p className="text-slate-400 mb-4">Para grandes campanhas</p>
             <p className="text-2xl font-bold text-purple-300 mb-4">R$ 399,90</p>
             <Button className="w-full">Comprar Agora</Button>
           </Card>
        </div>
      </div>

      {/* Histórico de Transações */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <History className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Histórico de Transações</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Compra de 1.500 rifas</p>
                <p className="text-slate-400 text-sm">28 de Janeiro, 2024</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-medium">+1.500 rifas</p>
              <p className="text-slate-400 text-sm">R$ 129,90</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <Coins className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-white font-medium">Uso em campanha "Verão 2024"</p>
                <p className="text-slate-400 text-sm">25 de Janeiro, 2024</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-red-300 font-medium">-350 rifas</p>
              <p className="text-slate-400 text-sm">Campanha ativa</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Compra de 500 rifas</p>
                <p className="text-slate-400 text-sm">15 de Janeiro, 2024</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-medium">+500 rifas</p>
              <p className="text-slate-400 text-sm">R$ 49,90</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">Ver Histórico Completo</Button>
        </div>
      </Card>

      {/* Métodos de Pagamento */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Métodos de Pagamento Aceitos</h2>
        <div className="flex items-center gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Cartão de Crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Cartão de Débito</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>PIX</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Boleto</span>
          </div>
        </div>
      </Card>
    </div>
  );
} 