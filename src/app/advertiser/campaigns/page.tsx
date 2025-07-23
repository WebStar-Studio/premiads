'use client';

import React, { useState } from 'react';
import { Card, Button } from '@/components/ui';
import { Plus, Play, Pause, Edit, Eye } from 'lucide-react';
import { CampaignForm } from '@/components/CampaignForm';

interface Campaign {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'pending' | 'paused' | 'ended';
  participants: number;
  submissions: number;
  conversionRate?: string;
  startDate?: string;
  missionType?: string;
  requirements?: string[];
  totalCost?: number;
}

export default function CampaignsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  // Dados mockados das campanhas
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: '1',
      title: 'Campanha de Verão 2024',
      description: 'Campanha de engajamento para a temporada de verão com foco em produtos sazonais.',
      status: 'active',
      participants: 1248,
      submissions: 856,
      conversionRate: '68.5%',
      missionType: 'social',
      requirements: ['Enviar foto com o produto', 'Usar hashtag #verão2024'],
      totalCost: 1000
    },
    {
      id: '2',
      title: 'Black Friday Especial',
      description: 'Campanha especial para a Black Friday com ofertas exclusivas e cashback aumentado.',
      status: 'pending',
      participants: 0,
      submissions: 0,
      startDate: '25/11/2024',
      missionType: 'coupon',
      requirements: ['Usar cupom de desconto', 'Compartilhar compra nas redes'],
      totalCost: 1500
    }
  ]);

  const handleCreateCampaign = (data: any) => {
    if (editingCampaign) {
      // Editar campanha existente
      setCampaigns(prev => prev.map(campaign => 
        campaign.id === editingCampaign.id 
          ? { ...campaign, ...data, id: campaign.id }
          : campaign
      ));
      console.log('Campanha editada:', data);
    } else {
      // Criar nova campanha
      const newCampaign: Campaign = {
        id: Date.now().toString(),
        ...data,
        status: 'pending',
        participants: 0,
        submissions: 0
      };
      setCampaigns(prev => [...prev, newCampaign]);
      console.log('Nova campanha criada:', data);
    }
    setEditingCampaign(null);
  };

  const handleEditCampaign = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingCampaign(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Campanhas</h1>
          <p className="text-slate-400 mt-2">
            Crie e gerencie todas as suas campanhas de marketing.
          </p>
        </div>
        <Button icon={Plus} onClick={() => setIsFormOpen(true)}>
          Criar Nova Campanha
        </Button>
      </div>

      {/* Filtros */}
      <Card className="p-4">
        <div className="flex gap-4">
          <Button variant="outline" size="sm">Todas</Button>
          <Button variant="outline" size="sm">Ativas</Button>
          <Button variant="outline" size="sm">Pendentes</Button>
          <Button variant="outline" size="sm">Encerradas</Button>
        </div>
      </Card>

      {/* Lista de Campanhas */}
      <div className="grid gap-6">
        {campaigns.map((campaign) => {
          const statusColors = {
            active: 'bg-green-500/20 text-green-300',
            pending: 'bg-yellow-500/20 text-yellow-300',
            paused: 'bg-orange-500/20 text-orange-300',
            ended: 'bg-red-500/20 text-red-300'
          };

          const statusLabels = {
            active: 'Ativa',
            pending: 'Pendente',
            paused: 'Pausada',
            ended: 'Encerrada'
          };

          return (
            <Card key={campaign.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">{campaign.title}</h3>
                    <span className={`px-2 py-1 text-sm rounded-full ${statusColors[campaign.status]}`}>
                      {statusLabels[campaign.status]}
                    </span>
                  </div>
                  <p className="text-slate-400 mt-2">
                    {campaign.description}
                  </p>
                  <div className="flex items-center gap-6 mt-4 text-sm">
                    <div>
                      <span className="text-slate-400">Participantes:</span>
                      <span className="text-white ml-1 font-medium">{campaign.participants.toLocaleString()}</span>
                    </div>
                    {campaign.status === 'active' && campaign.submissions !== undefined && (
                      <>
                        <div>
                          <span className="text-slate-400">Submissões:</span>
                          <span className="text-white ml-1 font-medium">{campaign.submissions.toLocaleString()}</span>
                        </div>
                        {campaign.conversionRate && (
                          <div>
                            <span className="text-slate-400">Taxa de conversão:</span>
                            <span className="text-green-300 ml-1 font-medium">{campaign.conversionRate}</span>
                          </div>
                        )}
                      </>
                    )}
                    {campaign.status === 'pending' && campaign.startDate && (
                      <div>
                        <span className="text-slate-400">Início previsto:</span>
                        <span className="text-white ml-1 font-medium">{campaign.startDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" icon={Eye}>Ver</Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    icon={Edit}
                    onClick={() => handleEditCampaign(campaign)}
                  >
                    Editar
                  </Button>
                  {campaign.status === 'active' && (
                    <Button variant="outline" size="sm" icon={Pause}>Pausar</Button>
                  )}
                  {campaign.status === 'pending' && (
                    <Button size="sm" icon={Play}>Ativar</Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <CampaignForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleCreateCampaign}
        editData={editingCampaign || undefined}
        isEditing={!!editingCampaign}
      />
    </div>
  );
} 