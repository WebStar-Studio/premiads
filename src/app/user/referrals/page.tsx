import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { UserPlus, Share, Copy, Gift, Users, Coins } from 'lucide-react';

export default function ReferralsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Indicações</h1>
        <p className="text-slate-400 mt-2">
          Convide seus amigos e ganhe recompensas incríveis por cada indicação!
        </p>
      </div>

      {/* Programa de Indicações */}
      <Card className="p-8" gradient="purple">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Programa de Indicação</h2>
          <p className="text-purple-200 mb-6">
            Convide amigos e ganhe <span className="font-bold text-white">500 pontos</span> para cada amigo que se cadastrar e completar sua primeira missão!
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Compartilhe</h3>
              <p className="text-purple-200 text-sm">Envie seu link exclusivo para amigos</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Eles se cadastram</h3>
              <p className="text-purple-200 text-sm">Amigos criam conta usando seu link</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Vocês ganham</h3>
              <p className="text-purple-200 text-sm">500 pontos para você, 200 para eles</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Link de Convite */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Seu Link de Convite</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <Input
              value="https://premiads.com/ref/usuario123"
              readOnly
              className="font-mono"
            />
            <Button icon={Copy} variant="outline">Copiar</Button>
          </div>
          
          <div className="flex gap-3">
            <Button icon={Share} className="flex-1">Compartilhar no WhatsApp</Button>
            <Button icon={Share} variant="outline" className="flex-1">Compartilhar no Telegram</Button>
          </div>
        </div>
      </Card>

      {/* Estatísticas */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <UserPlus className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-slate-400 text-sm">Amigos Convidados</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">8</p>
          <p className="text-slate-400 text-sm">Cadastros Confirmados</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Gift className="w-8 h-8 text-orange-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">5</p>
          <p className="text-slate-400 text-sm">Primeiras Missões</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Coins className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">2.500</p>
          <p className="text-slate-400 text-sm">Pontos Ganhos</p>
        </Card>
      </div>

      {/* Amigos Convidados */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Status dos Convites</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">MC</span>
              </div>
              <div>
                <p className="text-white font-medium">Maria Costa</p>
                <p className="text-slate-400 text-sm">maria.costa@email.com</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Completo
              </span>
              <p className="text-slate-400 text-xs mt-1">+500 pontos</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">JS</span>
              </div>
              <div>
                <p className="text-white font-medium">João Silva</p>
                <p className="text-slate-400 text-sm">joao.silva@email.com</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Completo
              </span>
              <p className="text-slate-400 text-xs mt-1">+500 pontos</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">AC</span>
              </div>
              <div>
                <p className="text-white font-medium">Ana Costa</p>
                <p className="text-slate-400 text-sm">ana.costa@email.com</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                Cadastrado
              </span>
              <p className="text-slate-400 text-xs mt-1">Aguardando primeira missão</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">PL</span>
              </div>
              <div>
                <p className="text-white font-medium">Pedro Lima</p>
                <p className="text-slate-400 text-sm">pedro.lima@email.com</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                Pendente
              </span>
              <p className="text-slate-400 text-xs mt-1">Convite enviado</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">CS</span>
              </div>
              <div>
                <p className="text-white font-medium">Carla Santos</p>
                <p className="text-slate-400 text-sm">carla.santos@email.com</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                Pendente
              </span>
              <p className="text-slate-400 text-xs mt-1">Convite enviado</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Bônus Especiais */}
      <Card className="p-6" gradient="orange">
        <h2 className="text-xl font-semibold text-white mb-4">🎉 Bônus Especiais</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-orange-200">5 amigos completaram primeira missão</span>
            <span className="px-3 py-1 bg-orange-400/20 text-orange-300 text-sm rounded-full">
              +1.000 pontos bônus
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-orange-200">10 indicações confirmadas</span>
            <span className="px-3 py-1 bg-slate-600 text-slate-300 text-sm rounded-full">
              2 restantes
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-orange-200">Convite do mês (20 indicações)</span>
            <span className="px-3 py-1 bg-slate-600 text-slate-300 text-sm rounded-full">
              12 restantes
            </span>
          </div>
        </div>
      </Card>

      {/* Ranking de Indicadores */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">🏆 Top Indicadores do Mês</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">1</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Carlos Mendes</p>
              <p className="text-slate-400 text-sm">47 indicações confirmadas</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-slate-800 rounded-lg">
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Marina Oliveira</p>
              <p className="text-slate-400 text-sm">32 indicações confirmadas</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-slate-800 rounded-lg">
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Rafael Costa</p>
              <p className="text-slate-400 text-sm">28 indicações confirmadas</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">12</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Você</p>
              <p className="text-slate-400 text-sm">8 indicações confirmadas</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 