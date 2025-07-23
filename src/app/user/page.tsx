import React from 'react';
import { Card, Button } from '@/components/ui';
import { Target, Trophy, Gift, Star, TrendingUp, Zap } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-2">
          Bem-vindo de volta! Veja seu progresso e descubra novas oportunidades.
        </p>
      </div>

      {/* Resumo de Pontos e Nível */}
      <Card className="p-6" gradient="purple">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">2.847 Pontos</h2>
              <p className="text-purple-200">Nível 12 - Explorador Avançado</p>
              <div className="mt-2">
                <div className="w-64 bg-purple-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                </div>
                <p className="text-purple-200 text-sm mt-1">740/1000 XP para o próximo nível</p>
              </div>
            </div>
          </div>
          <Button variant="orange">Ver Recompensas</Button>
        </div>
      </Card>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">23</p>
          <p className="text-slate-400 text-sm">Missões Concluídas</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">8</p>
          <p className="text-slate-400 text-sm">Sorteios Participados</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Gift className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">5</p>
          <p className="text-slate-400 text-sm">Recompensas Resgatadas</p>
        </Card>
        
        <Card className="p-6 text-center">
          <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">R$ 156</p>
          <p className="text-slate-400 text-sm">Cashback Acumulado</p>
        </Card>
      </div>

      {/* Missões em Destaque */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Missões em Destaque</h2>
          <Button variant="outline">Ver Todas</Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Avalie Nossa Loja</h3>
                  <p className="text-slate-400 text-sm">TechCorpBrasil</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">
                +150 pontos
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Compartilhe sua experiência e ajude outros clientes a conhecer nossos produtos.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>⏱️ 5 min</span>
                <span>👥 234 participaram</span>
              </div>
              <Button size="sm">Participar</Button>
            </div>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Compartilhe nas Redes</h3>
                  <p className="text-slate-400 text-sm">Promoção Especial</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                +200 pontos
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Compartilhe nossa promoção especial em suas redes sociais e ganhe pontos extras.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>⏱️ 2 min</span>
                <span>👥 156 participaram</span>
              </div>
              <Button size="sm">Participar</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Atividade Recente */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-white">Missão "Avaliação de Produto" concluída</p>
                <p className="text-slate-400 text-sm">+120 pontos adicionados</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 2 horas</p>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Gift className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white">Cupom de desconto resgatado</p>
                <p className="text-slate-400 text-sm">20% OFF em produtos selecionados</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Ontem</p>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-white">Nível 12 alcançado!</p>
                <p className="text-slate-400 text-sm">Novas recompensas desbloqueadas</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 3 dias</p>
          </div>
        </div>
      </Card>

      {/* Sorteio Ativo */}
      <Card className="p-6" gradient="orange">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Sorteio da Semana</h2>
            <p className="text-orange-200 mt-2">iPhone 15 Pro + AirPods</p>
            <p className="text-orange-300 text-sm mt-1">Termina em 3 dias • 1,247 participantes</p>
          </div>
          <div className="text-center">
            <p className="text-white text-sm">Seus bilhetes:</p>
            <p className="text-2xl font-bold text-white">3</p>
            <Button variant="outline" className="mt-2">Comprar Mais</Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 