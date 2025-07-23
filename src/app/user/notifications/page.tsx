import React from 'react';
import { Card, Button } from '@/components/ui';
import { Bell, Settings, Trophy, Target, Gift, Star, MessageSquare } from 'lucide-react';

export default function UserNotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Notificações</h1>
          <p className="text-slate-400 mt-2">
            Acompanhe suas atividades, missões e recompensas.
          </p>
        </div>
        <Button icon={Settings} variant="outline">Configurar</Button>
      </div>

      {/* Filtros */}
      <Card className="p-4">
        <div className="flex gap-4">
          <Button size="sm">Todas</Button>
          <Button variant="outline" size="sm">Não lidas</Button>
          <Button variant="outline" size="sm">Missões</Button>
          <Button variant="outline" size="sm">Recompensas</Button>
          <Button variant="outline" size="sm">Sorteios</Button>
        </div>
      </Card>

      {/* Lista de Notificações */}
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Missão concluída com sucesso! 🎉</h3>
                <span className="text-slate-500 text-sm">Há 1 hora</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">
                Parabéns! Você completou a missão "Avalie Nossa Nova Coleção" e ganhou 
                200 pontos. Seu novo saldo é de 2.847 pontos.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Ver Recompensas</Button>
                <Button variant="outline" size="sm">Marcar como Lida</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Nova missão disponível!</h3>
                <span className="text-slate-500 text-sm">Há 3 horas</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">
                Uma nova missão foi adicionada especialmente para você: "Compartilhe no Instagram". 
                Participe e ganhe 150 pontos!
              </p>
              <div className="flex gap-2">
                <Button size="sm">Ver Missão</Button>
                <Button variant="outline" size="sm">Lembrar Depois</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Você subiu de nível!</h3>
                <span className="text-slate-500 text-sm">Ontem</span>
              </div>
              <p className="text-slate-400 text-sm">
                Parabéns! Você alcançou o Nível 12 - Explorador Avançado. 
                Novas recompensas foram desbloqueadas!
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Cupom resgatado com sucesso</h3>
                <span className="text-slate-500 text-sm">Há 2 dias</span>
              </div>
              <p className="text-slate-400 text-sm">
                Seu cupom de 20% OFF foi aplicado com sucesso. 
                Válido até 31/03/2024 na ModaStyle Brasil.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Resultado do sorteio</h3>
                <span className="text-slate-500 text-sm">Há 3 dias</span>
              </div>
              <p className="text-slate-400 text-sm">
                O sorteio do iPhone 15 Pro foi realizado! Desta vez não foi você, 
                mas continue participando. O próximo pode ser seu!
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Sua indicação foi confirmada!</h3>
                <span className="text-slate-500 text-sm">Há 1 semana</span>
              </div>
              <p className="text-slate-400 text-sm">
                Maria Costa completou sua primeira missão! 
                Você ganhou 500 pontos de bônus por indicá-la.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Configurações Rápidas */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Configurações de Notificação</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Novas Missões</h3>
              <p className="text-slate-400 text-sm">Receber notificação quando houver novas missões</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-purple-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Resultados de Sorteios</h3>
              <p className="text-slate-400 text-sm">Ser notificado sobre resultados de sorteios</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-orange-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Conquistas e Níveis</h3>
              <p className="text-slate-400 text-sm">Notificações sobre subida de nível e conquistas</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-purple-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Indicações</h3>
              <p className="text-slate-400 text-sm">Atualizações sobre seus amigos indicados</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-green-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="text-white font-medium">Promoções e Ofertas</h3>
              <p className="text-slate-400 text-sm">Receber ofertas especiais e promoções</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" />
              <div className="relative w-10 h-6 bg-slate-600 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"></div>
              </div>
            </label>
          </div>
        </div>
      </Card>

      {/* Resumo de Atividades */}
      <Card className="p-6" gradient="purple">
        <h2 className="text-xl font-semibold text-white mb-4">📊 Resumo da Semana</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-purple-200 text-sm">Missões Concluídas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">650</p>
            <p className="text-purple-200 text-sm">Pontos Ganhos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">2</p>
            <p className="text-purple-200 text-sm">Recompensas Resgatadas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">1</p>
            <p className="text-purple-200 text-sm">Novo Nível</p>
          </div>
        </div>
      </Card>
      
      <div className="text-center">
        <Button variant="outline">Carregar Mais Notificações</Button>
      </div>
    </div>
  );
} 