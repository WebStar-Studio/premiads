import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { Settings, Lock, Key, Smartphone, Shield, Trash2, LogOut } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Configurações</h1>
        <p className="text-slate-400 mt-2">
          Configure suas preferências e segurança da conta.
        </p>
      </div>

      {/* Configurações de Conta */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Configurações da Conta</h2>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Email de Login"
              type="email"
              defaultValue="admin@techcorpbrasil.com"
              disabled
            />
            <Input
              label="Nome do Usuário"
              defaultValue="Administrador TechCorp"
            />
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">Preferências de Idioma</h3>
            <select className="w-full max-w-xs px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (US)</option>
              <option value="es-ES">Español</option>
            </select>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">Fuso Horário</h3>
            <select className="w-full max-w-xs px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="America/Sao_Paulo">América/São Paulo (GMT-3)</option>
              <option value="America/New_York">América/Nova York (GMT-5)</option>
              <option value="Europe/London">Europa/Londres (GMT+0)</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Segurança */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Segurança</h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <Lock className="w-6 h-6 text-slate-400" />
              <div>
                <h3 className="text-white font-medium">Alterar Senha</h3>
                <p className="text-slate-400 text-sm">Última alteração há 3 meses</p>
              </div>
            </div>
            <Button variant="outline">Alterar</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <Smartphone className="w-6 h-6 text-slate-400" />
              <div>
                <h3 className="text-white font-medium">Autenticação em Duas Etapas</h3>
                <p className="text-slate-400 text-sm">Adicione uma camada extra de segurança</p>
              </div>
            </div>
            <Button>Ativar</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <Key className="w-6 h-6 text-slate-400" />
              <div>
                <h3 className="text-white font-medium">Chaves de API</h3>
                <p className="text-slate-400 text-sm">Gerencie suas chaves de integração</p>
              </div>
            </div>
            <Button variant="outline">Gerenciar</Button>
          </div>
        </div>
      </Card>

      {/* Integrações */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Integrações</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FB</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Facebook for Business</h3>
                <p className="text-slate-400 text-sm">Conecte com Facebook Ads</p>
              </div>
            </div>
            <Button variant="outline">Conectar</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GA</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Google Analytics</h3>
                <p className="text-slate-400 text-sm">
                  <span className="text-green-400">Conectado</span> - Enviando dados
                </p>
              </div>
            </div>
            <Button variant="outline">Configurar</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Stripe</h3>
                <p className="text-slate-400 text-sm">
                  <span className="text-green-400">Conectado</span> - Processamento de pagamentos
                </p>
              </div>
            </div>
            <Button variant="outline">Configurar</Button>
          </div>
        </div>
      </Card>

      {/* Notificações por Email */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Notificações por Email</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Relatórios Semanais</h3>
              <p className="text-slate-400 text-sm">Receber resumo semanal por email</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-purple-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Alertas de Campanha</h3>
              <p className="text-slate-400 text-sm">Notificações sobre campanhas próximas do vencimento</p>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="relative w-10 h-6 bg-orange-500 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform translate-x-4 transition-transform"></div>
              </div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Novidades da Plataforma</h3>
              <p className="text-slate-400 text-sm">Receber informações sobre atualizações</p>
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

      {/* Zona de Perigo */}
      <Card className="p-6 border-red-500/30">
        <h2 className="text-xl font-semibold text-red-400 mb-6">Zona de Perigo</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-4">
              <LogOut className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-white font-medium">Sair da Conta</h3>
                <p className="text-slate-400 text-sm">Fazer logout em todos os dispositivos</p>
              </div>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              Sair
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-4">
              <Trash2 className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-white font-medium">Excluir Conta</h3>
                <p className="text-slate-400 text-sm">Permanentemente deletar sua conta e dados</p>
              </div>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              Excluir
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 