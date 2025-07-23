import React from 'react';
import { Card, Button } from '@/components/ui';
import { DollarSign, TrendingUp, ShoppingBag, CreditCard, History, Store } from 'lucide-react';

export default function CashbackPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Cashback</h1>
        <p className="text-slate-400 mt-2">
          Acompanhe seu saldo de cashback e histórico de transações.
        </p>
      </div>

      {/* Saldo de Cashback */}
      <Card className="p-8" gradient="orange">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">R$ 156,40</h2>
              <p className="text-orange-200 mb-3">Saldo disponível para uso</p>
              <div className="flex items-center gap-4 text-orange-300 text-sm">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+R$ 23,50 este mês</span>
                </div>
                <span>•</span>
                <span>Último resgate há 2 semanas</span>
              </div>
            </div>
          </div>
          <Button size="lg">Resgatar Saldo</Button>
        </div>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <ShoppingBag className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">R$ 1.247</p>
          <p className="text-slate-400 text-sm">Total Acumulado</p>
        </Card>
        
        <Card className="p-6 text-center">
          <CreditCard className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">R$ 890</p>
          <p className="text-slate-400 text-sm">Total Resgatado</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Store className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-slate-400 text-sm">Lojas Utilizadas</p>
        </Card>
      </div>

      {/* Lojas Parceiras */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Lojas com Cashback</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">ML</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">MercadoLivre</h3>
            <p className="text-slate-400 text-sm mb-3">Marketplace completo</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-red-400">2.5%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button className="w-full" size="sm">Comprar Agora</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">NU</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Nubank Store</h3>
            <p className="text-slate-400 text-sm mb-3">Produtos financeiros</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-purple-400">5.0%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button className="w-full" size="sm">Comprar Agora</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">AM</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Amazon</h3>
            <p className="text-slate-400 text-sm mb-3">E-commerce global</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-orange-400">1.8%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button className="w-full" size="sm">Comprar Agora</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">IF</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">iFood</h3>
            <p className="text-slate-400 text-sm mb-3">delivery de comida</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-green-400">3.2%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button className="w-full" size="sm">Comprar Agora</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">NF</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Netflix</h3>
            <p className="text-slate-400 text-sm mb-3">Streaming de filmes</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-400">4.0%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button className="w-full" size="sm">Assinar Agora</Button>
          </Card>

          <Card className="p-6 text-center border-yellow-500/20" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">SP</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Spotify</h3>
            <p className="text-slate-400 text-sm mb-3">Streaming de música</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-yellow-400">6.0%</span>
              <span className="text-slate-400 text-sm">cashback</span>
            </div>
            <Button variant="orange" className="w-full" size="sm">Assinar Agora</Button>
            <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs rounded-full mt-2">
              🔥 PROMOÇÃO
            </span>
          </Card>
        </div>
      </div>

      {/* Como Usar */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Como Usar seu Cashback</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Formas de Resgate:</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                PIX - Receba diretamente na sua conta
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Crédito na conta - Use em novas compras
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Conversão em pontos - 1:1 com pontos
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Doação - Para instituições parceiras
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-medium">Regras:</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Valor mínimo para resgate: R$ 10,00</li>
              <li>• Cashback expira em 12 meses</li>
              <li>• Resgate via PIX em até 2 dias úteis</li>
              <li>• Sem taxas para transferência</li>
            </ul>
          </div>
        </div>
      </Card>

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
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Cashback recebido - MercadoLivre</p>
                <p className="text-slate-400 text-sm">Compra de R$ 450,00</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-medium">+R$ 11,25</p>
              <p className="text-slate-400 text-sm">Há 2 dias</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Resgate via PIX</p>
                <p className="text-slate-400 text-sm">Transferido para conta corrente</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-red-300 font-medium">-R$ 50,00</p>
              <p className="text-slate-400 text-sm">Há 1 semana</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Cashback recebido - Netflix</p>
                <p className="text-slate-400 text-sm">Assinatura mensal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-medium">+R$ 2,20</p>
              <p className="text-slate-400 text-sm">Há 1 semana</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Cashback recebido - iFood</p>
                <p className="text-slate-400 text-sm">Pedido de almoço</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-medium">+R$ 1,60</p>
              <p className="text-slate-400 text-sm">Há 2 semanas</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">Ver Histórico Completo</Button>
        </div>
      </Card>
    </div>
  );
} 