import React from 'react';
import { Card, Button } from '@/components/ui';
import { Shield, CheckCircle, XCircle, Eye, MessageSquare } from 'lucide-react';

export default function ModerationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Moderação</h1>
        <p className="text-slate-400 mt-2">
          Analise e aprove as submissões de usuários para suas campanhas.
        </p>
      </div>

      {/* Estatísticas de Moderação */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-slate-400 text-sm">Pendentes</p>
          <p className="text-2xl font-bold text-yellow-400">23</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-slate-400 text-sm">Aprovadas</p>
          <p className="text-2xl font-bold text-green-400">187</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-slate-400 text-sm">Rejeitadas</p>
          <p className="text-2xl font-bold text-red-400">12</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-slate-400 text-sm">Taxa de Aprovação</p>
          <p className="text-2xl font-bold text-white">94%</p>
        </Card>
      </div>

      {/* Fila de Submissões */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Submissões Pendentes</h2>
        
        <Card className="p-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-slate-400 text-sm text-center">Imagem<br/>Preview</p>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Campanha de Verão 2024</h3>
                <p className="text-slate-400">Submissão por: Maria Silva</p>
                <p className="text-slate-500 text-sm">Enviado há 2 horas</p>
              </div>
              
              <div>
                <p className="text-white text-sm">
                  "Aqui está minha foto aproveitando o verão com os produtos da loja! 
                  Adorei a qualidade e o atendimento foi excelente."
                </p>
              </div>

              <div className="flex gap-3">
                <Button size="sm" icon={CheckCircle}>Aprovar</Button>
                <Button variant="outline" size="sm" icon={XCircle}>Rejeitar</Button>
                <Button variant="outline" size="sm" icon={Eye}>Ver Detalhes</Button>
                <Button variant="outline" size="sm" icon={MessageSquare}>Comentar</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-slate-400 text-sm text-center">Vídeo<br/>Preview</p>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Black Friday Especial</h3>
                <p className="text-slate-400">Submissão por: João Santos</p>
                <p className="text-slate-500 text-sm">Enviado há 4 horas</p>
              </div>
              
              <div>
                <p className="text-white text-sm">
                  "Vídeo mostrando os descontos incríveis que consegui na Black Friday. 
                  Recomendo para todos os meus seguidores!"
                </p>
              </div>

              <div className="flex gap-3">
                <Button size="sm" icon={CheckCircle}>Aprovar</Button>
                <Button variant="outline" size="sm" icon={XCircle}>Rejeitar</Button>
                <Button variant="outline" size="sm" icon={Eye}>Ver Detalhes</Button>
                <Button variant="outline" size="sm" icon={MessageSquare}>Comentar</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Histórico Recente */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Histórico Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white">Submissão de Ana Costa - Aprovada</p>
                <p className="text-slate-400 text-sm">Campanha: Promoção Especial</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 1 hora</p>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-white">Submissão de Pedro Lima - Rejeitada</p>
                <p className="text-slate-400 text-sm">Campanha: Cashback Eletrônicos</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Há 3 horas</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 