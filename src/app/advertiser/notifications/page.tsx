import React from 'react';
import { Card, Button } from '@/components/ui';
import { Bell, Settings, MessageSquare, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Notificações</h1>
          <p className="text-slate-400 mt-2">
            Central de notificações sobre suas campanhas e atividades.
          </p>
        </div>
        <Button icon={Settings} variant="outline">Configurar</Button>
      </div>

      {/* Filtros */}
      <Card className="p-4">
        <div className="flex gap-4">
          <Button size="sm">Todas</Button>
          <Button variant="outline" size="sm">Não lidas</Button>
          <Button variant="outline" size="sm">Submissões</Button>
          <Button variant="outline" size="sm">Campanhas</Button>
          <Button variant="outline" size="sm">Sistema</Button>
        </div>
      </Card>

      {/* Lista de Notificações */}
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Nova submissão recebida</h3>
                <span className="text-slate-500 text-sm">Há 5 minutos</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">
                Maria Silva enviou uma nova submissão para a campanha "Verão 2024". 
                A submissão está aguardando sua análise.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Ver Submissão</Button>
                <Button variant="outline" size="sm">Marcar como Lida</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Campanha próxima do vencimento</h3>
                <span className="text-slate-500 text-sm">Há 2 horas</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">
                A campanha "Black Friday Especial" vencerá em 3 dias. 
                Considere estender o prazo ou finalizar a campanha.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Ver Campanha</Button>
                <Button variant="outline" size="sm">Estender Prazo</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Submissão aprovada</h3>
                <span className="text-slate-500 text-sm">Há 4 horas</span>
              </div>
              <p className="text-slate-400 text-sm">
                Você aprovou a submissão de João Santos para a campanha "Cashback Eletrônicos".
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Meta de engajamento alcançada</h3>
                <span className="text-slate-500 text-sm">Ontem</span>
              </div>
              <p className="text-slate-400 text-sm">
                Parabéns! A campanha "Verão 2024" alcançou 1000 participantes, 
                superando a meta de 800.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 opacity-60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Lembrete de análise pendente</h3>
                <span className="text-slate-500 text-sm">Há 2 dias</span>
              </div>
              <p className="text-slate-400 text-sm">
                Você tem 15 submissões aguardando análise há mais de 24 horas.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Configurações de Notificação */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Configurações de Notificação</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Novas Submissões</h3>
              <p className="text-slate-400 text-sm">Receber notificação quando houver novas submissões</p>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="relative w-10 h-6 bg-purple-500 rounded-full transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
                </div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
            <div>
              <h3 className="text-white font-medium">Campanhas Próximas do Vencimento</h3>
              <p className="text-slate-400 text-sm">Alertas sobre campanhas que vencerão em breve</p>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="relative w-10 h-6 bg-orange-500 rounded-full transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
                </div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="text-white font-medium">Relatórios Semanais</h3>
              <p className="text-slate-400 text-sm">Resumo semanal de performance das campanhas</p>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="sr-only" />
                <div className="relative w-10 h-6 bg-slate-600 rounded-full transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="text-center">
        <Button variant="outline">Carregar Mais Notificações</Button>
      </div>
    </div>
  );
} 