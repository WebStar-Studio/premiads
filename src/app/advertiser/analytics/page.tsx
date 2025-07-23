'use client';

import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Button, 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  LineChart, 
  BarChart, 
  DonutChart 
} from '@/components/ui';
import { 
  BarChart3, 
  Download, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  RefreshCw, 
  Filter,
  Eye,
  MousePointer,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('month');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Dados mockados realistas
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalEngagement: 89.2,
      averageROI: 4.8,
      totalReach: 1248000,
      conversionRate: 6.7,
      trends: {
        engagement: 5.4,
        roi: 12.1,
        reach: 18.3,
        conversion: 2.1
      }
    },
    engagementData: [
      { label: '7 dias atrás', value: 85 },
      { label: '6 dias atrás', value: 92 },
      { label: '5 dias atrás', value: 88 },
      { label: '4 dias atrás', value: 95 },
      { label: '3 dias atrás', value: 91 },
      { label: '2 dias atrás', value: 87 },
      { label: 'Ontem', value: 94 },
      { label: 'Hoje', value: 89 }
    ],
    campaignPerformance: [
      { label: 'Campanha de Verão 2024', value: 1248 },
      { label: 'Cashback Eletrônicos', value: 892 },
      { label: 'Promoção Especial', value: 654 },
      { label: 'Black Friday', value: 432 },
      { label: 'Natal 2024', value: 321 }
    ],
    audienceData: [
      { label: '18-24 anos', value: 28 },
      { label: '25-34 anos', value: 35 },
      { label: '35-44 anos', value: 22 },
      { label: '45-54 anos', value: 12 },
      { label: '55+ anos', value: 3 }
    ],
    roiData: [
      { label: 'Jan', value: 3.2 },
      { label: 'Fev', value: 4.1 },
      { label: 'Mar', value: 3.8 },
      { label: 'Abr', value: 4.5 },
      { label: 'Mai', value: 5.2 },
      { label: 'Jun', value: 4.8 },
      { label: 'Jul', value: 4.9 }
    ]
  });

  const refreshData = async () => {
    setIsLoading(true);
    
    // Simula atualização de dados
    setTimeout(() => {
      setLastUpdate(new Date());
      setIsLoading(false);
      
      // Simula pequenas variações nos dados
      setAnalyticsData(prev => ({
        ...prev,
        overview: {
          ...prev.overview,
          totalEngagement: prev.overview.totalEngagement + (Math.random() - 0.5) * 2,
          averageROI: prev.overview.averageROI + (Math.random() - 0.5) * 0.2,
          totalReach: prev.overview.totalReach + Math.floor((Math.random() - 0.5) * 50000),
          conversionRate: prev.overview.conversionRate + (Math.random() - 0.5) * 0.5
        }
      }));
    }, 1500);
  };

  const exportData = () => {
    const dataToExport = {
      timestamp: new Date().toISOString(),
      dateRange,
      ...analyticsData
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `analytics-${dateRange}-${new Date().getTime()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Análises</h1>
          <p className="text-slate-400 mt-2">
            Relatórios detalhados sobre o desempenho das suas campanhas
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-500">
              Última atualização: {lastUpdate.toLocaleTimeString()}
            </span>
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
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Button onClick={exportData} size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Filtros de Data */}
      <Card className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-white font-medium">Período:</span>
          <div className="flex gap-2">
            {[
              { key: 'week', label: '7 dias' },
              { key: 'month', label: '30 dias' },
              { key: 'quarter', label: '3 meses' },
              { key: 'year', label: '12 meses' }
            ].map(period => (
              <Button
                key={period.key}
                variant={dateRange === period.key ? 'purple' : 'outline'}
                size="sm"
                onClick={() => setDateRange(period.key)}
                className={dateRange === period.key ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6" gradient="purple">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-sm">Engajamento Total</p>
              <p className="text-2xl font-bold text-white mt-1">
                {analyticsData.overview.totalEngagement.toFixed(1)}%
              </p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUp className="w-3 h-3 text-green-400" />
                <span className="text-purple-300 text-xs">
                  +{analyticsData.overview.trends.engagement.toFixed(1)}% vs mês anterior
                </span>
              </div>
            </div>
            <Target className="w-8 h-8 text-purple-300" />
          </div>
        </Card>
        
        <Card className="p-6" gradient="orange">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-200 text-sm">ROI Médio</p>
              <p className="text-2xl font-bold text-white mt-1">
                {analyticsData.overview.averageROI.toFixed(1)}x
              </p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUp className="w-3 h-3 text-green-400" />
                <span className="text-orange-300 text-xs">
                  +{analyticsData.overview.trends.roi.toFixed(1)}% vs mês anterior
                </span>
              </div>
            </div>
            <DollarSign className="w-8 h-8 text-orange-300" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Alcance Total</p>
              <p className="text-2xl font-bold text-white mt-1">
                {(analyticsData.overview.totalReach / 1000000).toFixed(1)}M
              </p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUp className="w-3 h-3 text-green-400" />
                <span className="text-green-300 text-xs">
                  +{analyticsData.overview.trends.reach.toFixed(1)}% vs mês anterior
                </span>
              </div>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Taxa de Conversão</p>
              <p className="text-2xl font-bold text-white mt-1">
                {analyticsData.overview.conversionRate.toFixed(1)}%
              </p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUp className="w-3 h-3 text-green-400" />
                <span className="text-green-300 text-xs">
                  +{analyticsData.overview.trends.conversion.toFixed(1)}% vs mês anterior
                </span>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="audience">Audiência</TabsTrigger>
          <TabsTrigger value="roi">ROI</TabsTrigger>
        </TabsList>

        {/* Visão Geral */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <LineChart
                title="Engajamento nos Últimos 7 Dias"
                data={analyticsData.engagementData}
                height={250}
              />
            </Card>
            
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resumo de Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">12.4K</p>
                    <p className="text-slate-400 text-sm">Visualizações</p>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-lg">
                    <MousePointer className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">3.2K</p>
                    <p className="text-slate-400 text-sm">Cliques</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-white font-medium mb-3">Principais Métricas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">CTR médio:</span>
                      <span className="text-white font-medium">25.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">CPC médio:</span>
                      <span className="text-white font-medium">R$ 0,42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Custo por conversão:</span>
                      <span className="text-white font-medium">R$ 6,28</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Campanhas */}
        <TabsContent value="campaigns" className="space-y-6">
          <Card className="p-6">
            <BarChart
              title="Performance por Campanha"
              data={analyticsData.campaignPerformance}
              height={300}
            />
          </Card>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Top 5 Campanhas</h3>
              <div className="space-y-4">
                {analyticsData.campaignPerformance.slice(0, 3).map((campaign, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{campaign.label}</p>
                      <p className="text-slate-400 text-sm">{campaign.value.toLocaleString()} participantes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-300 font-bold">ROI: {(Math.random() * 3 + 3).toFixed(1)}x</p>
                      <p className="text-slate-400 text-sm">{(Math.random() * 20 + 60).toFixed(1)}% conversão</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Status das Campanhas</h3>
              <DonutChart
                data={[
                  { label: 'Ativas', value: 8 },
                  { label: 'Pausadas', value: 3 },
                  { label: 'Encerradas', value: 12 },
                  { label: 'Rascunho', value: 2 }
                ]}
              />
            </Card>
          </div>
        </TabsContent>

        {/* Audiência */}
        <TabsContent value="audience" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <BarChart
                title="Distribuição por Faixa Etária"
                data={analyticsData.audienceData}
                height={250}
              />
            </Card>
            
            <Card className="p-6">
              <DonutChart
                title="Distribuição por Gênero"
                data={[
                  { label: 'Feminino', value: 52 },
                  { label: 'Masculino', value: 48 }
                ]}
              />
            </Card>
          </div>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Dados Geográficos</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { region: 'Sudeste', percentage: 45, users: '562K' },
                { region: 'Sul', percentage: 25, users: '312K' },
                { region: 'Nordeste', percentage: 20, users: '248K' },
                { region: 'Centro-Oeste', percentage: 7, users: '87K' },
                { region: 'Norte', percentage: 3, users: '39K' }
              ].map((region, index) => (
                <div key={index} className="p-4 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">{region.region}</h4>
                    <span className="text-slate-400 text-sm">{region.percentage}%</span>
                  </div>
                  <p className="text-slate-300 text-sm">{region.users} usuários</p>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-700 h-1 rounded-full"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ROI */}
        <TabsContent value="roi" className="space-y-6">
          <Card className="p-6">
            <LineChart
              title="ROI ao Longo do Tempo"
              data={analyticsData.roiData}
              height={300}
            />
          </Card>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'ROI Médio', value: '4.8x', change: '+12%', trend: 'up' },
              { label: 'Melhor ROI', value: '8.2x', change: 'Campanha de Verão', trend: 'neutral' },
              { label: 'Investimento Total', value: 'R$ 45K', change: '+8%', trend: 'up' },
              { label: 'Retorno Total', value: 'R$ 216K', change: '+22%', trend: 'up' }
            ].map((metric, index) => (
              <Card key={index} className="p-4">
                <div className="text-center">
                  <p className="text-slate-400 text-sm">{metric.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {metric.trend === 'up' && <ArrowUp className="w-3 h-3 text-green-400" />}
                    <span className={`text-xs ${metric.trend === 'up' ? 'text-green-400' : 'text-slate-400'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 