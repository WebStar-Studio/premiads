'use client';

import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Button, 
  Input, 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  DonutChart,
  BarChart 
} from '@/components/ui';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Filter, 
  Download, 
  Eye, 
  Lock, 
  Unlock,
  Search,
  Coins,
  UserCheck,
  UserX,
  UserPlus,
  Info,
  BarChart3,
  RefreshCw
} from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: 'completed' | 'pending' | 'abandoned';
  campaign: string;
  startedAt: string;
  completedAt?: string;
  location?: string;
  demographics?: {
    age?: number;
    gender?: string;
    location?: string;
    income?: string;
    interests?: string[];
  };
  unlocked: boolean;
  submissionUrl?: string;
  submissionType?: string;
}

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState('participants');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rifasBalance, setRifasBalance] = useState(2450);
  const [isLoading, setIsLoading] = useState(false);

  // Dados mockados de campanhas
  const campaigns = [
    { id: '1', title: 'Campanha de Verão 2024' },
    { id: '2', title: 'Cashback Eletrônicos' },
    { id: '3', title: 'Promoção Especial' },
    { id: '4', title: 'Black Friday' }
  ];

  // Dados mockados de participantes
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: '1',
      name: 'Ana Silva',
      email: 'ana.silva@email.com',
      phone: '+55 (11) 99999-1234',
      status: 'completed',
      campaign: 'Campanha de Verão 2024',
      startedAt: '2024-01-15T10:30:00Z',
      completedAt: '2024-01-15T11:45:00Z',
      location: 'São Paulo, SP',
      demographics: {
        age: 28,
        gender: 'Feminino',
        location: 'São Paulo, SP',
        income: 'R$ 3.000 - R$ 5.000',
        interests: ['Moda', 'Tecnologia']
      },
      unlocked: true,
      submissionUrl: 'photo.jpg',
      submissionType: 'Foto'
    },
    {
      id: '2',
      name: 'Carlos Santos',
      email: 'carlos.santos@email.com',
      phone: '+55 (21) 88888-5678',
      status: 'pending',
      campaign: 'Cashback Eletrônicos',
      startedAt: '2024-01-16T14:20:00Z',
      location: 'Rio de Janeiro, RJ',
      unlocked: false,
      submissionType: 'Vídeo'
    },
    {
      id: '3',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      status: 'completed',
      campaign: 'Promoção Especial',
      startedAt: '2024-01-14T09:15:00Z',
      completedAt: '2024-01-14T09:45:00Z',
      location: 'Belo Horizonte, MG',
      demographics: {
        age: 35,
        gender: 'Feminino',
        location: 'Belo Horizonte, MG',
        income: 'R$ 5.000 - R$ 8.000',
        interests: ['Casa', 'Família']
      },
      unlocked: true,
      submissionUrl: 'review.txt',
      submissionType: 'Avaliação'
    },
    {
      id: '4',
      name: 'João Pereira',
      email: 'joao.pereira@email.com',
      status: 'abandoned',
      campaign: 'Black Friday',
      startedAt: '2024-01-13T16:00:00Z',
      location: 'Brasília, DF',
      unlocked: false
    }
  ]);

  // Dados para gráficos
  const demographicsData = [
    { label: '18-25 anos', value: 25 },
    { label: '26-35 anos', value: 45 },
    { label: '36-45 anos', value: 20 },
    { label: '46+ anos', value: 10 }
  ];

  const statusData = [
    { label: 'Completadas', value: participants.filter(p => p.status === 'completed').length },
    { label: 'Pendentes', value: participants.filter(p => p.status === 'pending').length },
    { label: 'Abandonadas', value: participants.filter(p => p.status === 'abandoned').length }
  ];

  const campaignData = campaigns.map(campaign => ({
    label: campaign.title,
    value: participants.filter(p => p.campaign === campaign.title).length
  }));

  // Filtros
  const filteredParticipants = participants.filter(participant => {
    const matchesCampaign = selectedCampaign === '' || participant.campaign === selectedCampaign;
    const matchesStatus = statusFilter === '' || participant.status === statusFilter;
    const matchesSearch = searchTerm === '' || 
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCampaign && matchesStatus && matchesSearch;
  });

  // Função para desbloquear dados demográficos
  const unlockDemographics = (participantId: string) => {
    const requiredRifas = 2;
    
    if (rifasBalance >= requiredRifas) {
      setRifasBalance(prev => prev - requiredRifas);
      setParticipants(prev => prev.map(p => 
        p.id === participantId 
          ? { 
              ...p, 
              unlocked: true,
              demographics: {
                age: Math.floor(Math.random() * 40) + 20,
                gender: Math.random() > 0.5 ? 'Feminino' : 'Masculino',
                location: ['São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG'][Math.floor(Math.random() * 3)],
                income: ['R$ 2.000 - R$ 3.000', 'R$ 3.000 - R$ 5.000', 'R$ 5.000 - R$ 8.000'][Math.floor(Math.random() * 3)],
                interests: ['Tecnologia', 'Moda', 'Esportes', 'Culinária'].slice(0, Math.floor(Math.random() * 3) + 1)
              }
            }
          : p
      ));
    }
  };

  const exportData = () => {
    const dataToExport = {
      timestamp: new Date().toISOString(),
      filters: { selectedCampaign, statusFilter, searchTerm },
      participants: filteredParticipants,
      stats: {
        total: filteredParticipants.length,
        completed: filteredParticipants.filter(p => p.status === 'completed').length,
        pending: filteredParticipants.filter(p => p.status === 'pending').length,
        abandoned: filteredParticipants.filter(p => p.status === 'abandoned').length
      }
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `crm-data-${new Date().getTime()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const renderStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { bg: 'bg-green-500/20', text: 'text-green-300', label: 'Completa' },
      pending: { bg: 'bg-yellow-500/20', text: 'text-yellow-300', label: 'Pendente' },
      abandoned: { bg: 'bg-red-500/20', text: 'text-red-300', label: 'Abandonada' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">CRM</h1>
          <p className="text-slate-400 mt-2">
            Gerencie e analise dados dos participantes das suas campanhas
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">
                Saldo: <span className="font-bold text-yellow-400">{rifasBalance} rifas</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={refreshData}
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
          <Button onClick={exportData} size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Sistema de Desbloqueio - Info */}
      <Card className="p-6 border-blue-500/30 bg-blue-900/20">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-blue-400 mb-2">Sistema de Desbloqueio de Dados</h3>
            <p className="text-sm text-slate-300 mb-3">
              Os dados demográficos dos participantes são protegidos. Você pode desbloquear 
              informações individuais usando suas rifas.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">
                  <strong>Dados básicos:</strong> Sempre visíveis
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">
                  <strong>Demografia:</strong> 2 rifas por participante
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Filtros */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Campanha</label>
            <select
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas as campanhas</option>
              {campaigns.map(campaign => (
                <option key={campaign.id} value={campaign.title}>{campaign.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos os status</option>
              <option value="completed">Completadas</option>
              <option value="pending">Pendentes</option>
              <option value="abandoned">Abandonadas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Data Início</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Buscar</label>
            <Input
              placeholder="Nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={Search}
            />
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total de Participantes</p>
              <p className="text-2xl font-bold text-white mt-1">{filteredParticipants.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Completadas</p>
              <p className="text-2xl font-bold text-white mt-1">
                {filteredParticipants.filter(p => p.status === 'completed').length}
              </p>
            </div>
            <UserCheck className="w-8 h-8 text-green-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Pendentes</p>
              <p className="text-2xl font-bold text-white mt-1">
                {filteredParticipants.filter(p => p.status === 'pending').length}
              </p>
            </div>
            <UserPlus className="w-8 h-8 text-yellow-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Abandonadas</p>
              <p className="text-2xl font-bold text-white mt-1">
                {filteredParticipants.filter(p => p.status === 'abandoned').length}
              </p>
            </div>
            <UserX className="w-8 h-8 text-red-400" />
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="participants">Participantes</TabsTrigger>
          <TabsTrigger value="demographics">Demografia</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
        </TabsList>

        {/* Lista de Participantes */}
        <TabsContent value="participants">
          <Card className="p-6">
            <div className="space-y-4">
              {filteredParticipants.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Users className="w-12 h-12 mx-auto mb-4 text-slate-600" />
                  <h3 className="text-lg font-medium mb-2">Nenhum participante encontrado</h3>
                  <p>Tente ajustar os filtros ou aguarde novos participantes.</p>
                </div>
              ) : (
                filteredParticipants.map((participant) => (
                  <div key={participant.id} className="bg-slate-800 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{participant.name}</h3>
                          {renderStatusBadge(participant.status)}
                        </div>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {participant.email}
                          </div>
                          {participant.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {participant.phone}
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {participant.location || 'Não informado'}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(participant.startedAt).toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm mt-2">
                          Campanha: {participant.campaign}
                        </p>
                      </div>
                    </div>

                    {/* Dados Demográficos */}
                    <div className="border-t border-slate-700 pt-4">
                      {participant.unlocked ? (
                        <div className="bg-green-900/20 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-green-400 mb-3">
                            <Unlock className="w-4 h-4" />
                            <span className="text-sm font-medium">Dados demográficos</span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            {participant.demographics?.age && (
                              <div>
                                <span className="text-slate-400">Idade:</span>
                                <span className="text-white ml-2">{participant.demographics.age} anos</span>
                              </div>
                            )}
                            {participant.demographics?.gender && (
                              <div>
                                <span className="text-slate-400">Gênero:</span>
                                <span className="text-white ml-2">{participant.demographics.gender}</span>
                              </div>
                            )}
                            {participant.demographics?.income && (
                              <div>
                                <span className="text-slate-400">Renda:</span>
                                <span className="text-white ml-2">{participant.demographics.income}</span>
                              </div>
                            )}
                            {participant.demographics?.interests && (
                              <div>
                                <span className="text-slate-400">Interesses:</span>
                                <span className="text-white ml-2">
                                  {participant.demographics.interests.join(', ')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <Lock className="w-4 h-4" />
                            <span className="text-sm">Dados demográficos bloqueados</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-slate-400">Custo: 2 rifas</span>
                            <Button
                              onClick={() => unlockDemographics(participant.id)}
                              disabled={rifasBalance < 2}
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-purple-700"
                            >
                              Desbloquear
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </TabsContent>

        {/* Demografia */}
        <TabsContent value="demographics">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <BarChart
                title="Distribuição por Faixa Etária"
                data={demographicsData}
                height={250}
              />
            </Card>
            
            <Card className="p-6">
              <DonutChart
                title="Status dos Participantes"
                data={statusData}
              />
            </Card>
          </div>
        </TabsContent>

        {/* Campanhas */}
        <TabsContent value="campaigns">
          <Card className="p-6">
            <BarChart
              title="Participantes por Campanha"
              data={campaignData}
              height={300}
            />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 