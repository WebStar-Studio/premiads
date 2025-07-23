import React from 'react';
import { Card, Button } from '@/components/ui';
import { Trophy, Ticket, Clock, Users, Star, Gift } from 'lucide-react';

export default function RafflesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Sorteios</h1>
          <p className="text-slate-400 mt-2">
            Participe dos sorteios e concorra a prêmios incríveis!
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-400">Suas rifas</p>
          <p className="text-2xl font-bold text-orange-400">45</p>
        </div>
      </div>

      {/* Sorteio em Destaque */}
      <Card className="p-8" gradient="orange">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Sorteio da Semana</h2>
              <p className="text-orange-200 text-lg">iPhone 15 Pro + AirPods Pro</p>
              <div className="flex items-center gap-6 mt-3 text-orange-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Termina em 3 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1.247 participantes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-orange-200 mb-2">Seus bilhetes:</p>
            <p className="text-4xl font-bold text-white mb-4">3</p>
            <Button size="lg">Comprar Mais Bilhetes</Button>
          </div>
        </div>
      </Card>

      {/* Sorteios Ativos */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Sorteios Ativos</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">MacBook Pro M3</h3>
                  <p className="text-slate-400 text-sm">Notebook profissional da Apple</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                5 rifas
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 dias restantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>892 participantes</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Seus bilhetes:</span>
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <p className="text-slate-400 text-xs">35% dos bilhetes vendidos</p>
            </div>
            
            <Button className="w-full">Comprar Bilhetes</Button>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Kit Gamer Completo</h3>
                  <p className="text-slate-400 text-sm">Teclado, mouse e headset premium</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                3 rifas
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 dias restantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>456 participantes</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Seus bilhetes:</span>
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
              <p className="text-slate-400 text-xs">58% dos bilhetes vendidos</p>
            </div>
            
            <Button className="w-full">Comprar Bilhetes</Button>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Vale Compras R$ 1.000</h3>
                  <p className="text-slate-400 text-sm">Para usar em lojas parceiras</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                2 rifas
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 dias restantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>673 participantes</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Seus bilhetes:</span>
                <span className="text-white font-bold">0</span>
              </div>
              
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-slate-400 text-xs">75% dos bilhetes vendidos</p>
            </div>
            
            <Button className="w-full">Comprar Bilhetes</Button>
          </Card>

          <Card className="p-6 border-yellow-500/20" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Experiência de Luxo</h3>
                  <p className="text-slate-400 text-sm">Weekend em resort 5 estrelas</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full mb-1">
                  10 rifas
                </span>
                <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs rounded-full">
                  🔥 VIP
                </span>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>20 dias restantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>234 participantes</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Seus bilhetes:</span>
                <span className="text-white font-bold">0</span>
              </div>
              
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <p className="text-slate-400 text-xs">25% dos bilhetes vendidos</p>
            </div>
            
            <Button variant="orange" className="w-full">Comprar Bilhetes</Button>
          </Card>
        </div>
      </div>

      {/* Meus Bilhetes */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Meus Bilhetes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">iPhone 15 Pro</h3>
              <span className="text-orange-400 font-bold">3 bilhetes</span>
            </div>
            <p className="text-slate-400 text-sm">Números: 1247, 1248, 1249</p>
          </div>
          
          <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">MacBook Pro M3</h3>
              <span className="text-purple-400 font-bold">2 bilhetes</span>
            </div>
            <p className="text-slate-400 text-sm">Números: 567, 568</p>
          </div>
          
          <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">Kit Gamer</h3>
              <span className="text-green-400 font-bold">1 bilhete</span>
            </div>
            <p className="text-slate-400 text-sm">Número: 89</p>
          </div>
        </div>
      </Card>

      {/* Resultados Anteriores */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Resultados Anteriores</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Apple Watch Series 9</p>
                <p className="text-slate-400 text-sm">Vencedor: João S. • Bilhete #1024</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 1 semana</p>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">PlayStation 5 + Jogos</p>
                <p className="text-slate-400 text-sm">Vencedor: Maria C. • Bilhete #2847</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 2 semanas</p>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Ticket className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Vale Compras R$ 500</p>
                <p className="text-slate-400 text-sm">Vencedor: Carlos O. • Bilhete #156</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 3 semanas</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 