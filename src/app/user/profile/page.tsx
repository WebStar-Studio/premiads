import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { User, Mail, Phone, MapPin, Calendar, Shield, Save, Upload, Star } from 'lucide-react';

export default function UserProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Perfil</h1>
        <p className="text-slate-400 mt-2">
          Gerencie suas informações pessoais e preferências.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Avatar e Nível */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Maria Santos</h2>
            <p className="text-slate-400 mb-4">Usuário desde Janeiro 2024</p>
            <Button icon={Upload} variant="outline" className="w-full mb-4">
              Alterar Foto
            </Button>
            
            {/* Nível */}
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Nível 12</span>
              </div>
              <p className="text-purple-300 text-sm mb-3">Explorador Avançado</p>
              <div className="bg-purple-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '74%' }}></div>
              </div>
              <p className="text-purple-200 text-xs mt-1">740/1000 XP</p>
            </div>
          </Card>
          
          {/* Estatísticas Rápidas */}
          <Card className="p-6">
            <h3 className="text-white font-semibold mb-4">Suas Estatísticas</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Missões concluídas:</span>
                <span className="text-white font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Pontos acumulados:</span>
                <span className="text-white font-medium">2.847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Recompensas resgatadas:</span>
                <span className="text-white font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Indicações:</span>
                <span className="text-white font-medium">8</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Informações Pessoais */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-slate-400" />
              <h2 className="text-xl font-semibold text-white">Informações Pessoais</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                placeholder="Seu nome completo"
                defaultValue="Maria Santos Silva"
              />
              <Input
                label="Apelido/Nickname"
                placeholder="Como quer ser chamado"
                defaultValue="Maria S."
              />
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                defaultValue="maria.santos@email.com"
                icon={Mail}
              />
              <Input
                label="Telefone"
                placeholder="(11) 99999-9999"
                defaultValue="(11) 9 8765-4321"
                icon={Phone}
              />
              <Input
                label="Data de Nascimento"
                type="date"
                defaultValue="1995-03-15"
                icon={Calendar}
              />
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Gênero
                </label>
                <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                  <option value="nao-informar">Prefiro não informar</option>
                </select>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-slate-400" />
              <h2 className="text-xl font-semibold text-white">Endereço</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  label="CEP"
                  placeholder="00000-000"
                  defaultValue="01310-100"
                />
                <Input
                  label="Estado"
                  placeholder="SP"
                  defaultValue="SP"
                />
                <Input
                  label="Cidade"
                  placeholder="São Paulo"
                  defaultValue="São Paulo"
                />
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <Input
                    label="Endereço"
                    placeholder="Rua das Flores, 123"
                    defaultValue="Av. Paulista, 500"
                  />
                </div>
                <Input
                  label="Número"
                  placeholder="123"
                  defaultValue="500"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Complemento"
                  placeholder="Apto 45, Bloco B"
                  defaultValue="Apto 1201"
                />
                <Input
                  label="Bairro"
                  placeholder="Centro"
                  defaultValue="Bela Vista"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Interesses */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Interesses</h2>
        <p className="text-slate-400 mb-4">
          Selecione seus interesses para receber missões mais relevantes para você.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'Tecnologia', selected: true },
            { name: 'Moda', selected: true },
            { name: 'Beleza', selected: false },
            { name: 'Esportes', selected: true },
            { name: 'Alimentação', selected: false },
            { name: 'Viagem', selected: false },
            { name: 'Educação', selected: true },
            { name: 'Saúde', selected: false },
            { name: 'Entretenimento', selected: true },
            { name: 'Casa e Jardim', selected: false },
            { name: 'Automóveis', selected: false },
            { name: 'Pets', selected: true }
          ].map((interest) => (
            <label key={interest.name} className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                defaultChecked={interest.selected}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                interest.selected 
                  ? 'bg-purple-500 border-purple-500' 
                  : 'border-slate-600 hover:border-slate-500'
              }`}>
                {interest.selected && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-white text-sm">{interest.name}</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Configurações de Privacidade */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Configurações de Privacidade</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Perfil Público</h3>
              <p className="text-slate-400 text-sm">Permitir que outros usuários vejam seu perfil</p>
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
              <h3 className="text-white font-medium">Compartilhar Estatísticas</h3>
              <p className="text-slate-400 text-sm">Mostrar suas conquistas no ranking público</p>
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
              <h3 className="text-white font-medium">Receber Mensagens</h3>
              <p className="text-slate-400 text-sm">Permitir que outros usuários enviem mensagens</p>
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

      {/* Botões de Ação */}
      <div className="flex gap-4">
        <Button icon={Save} size="lg">Salvar Alterações</Button>
        <Button variant="outline" size="lg">Cancelar</Button>
      </div>
    </div>
  );
} 