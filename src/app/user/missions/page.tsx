import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { Target, Search, Filter, Star, Clock, Users, Upload } from 'lucide-react';

export default function MissionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Missões</h1>
        <p className="text-slate-400 mt-2">
          Explore missões disponíveis e ganhe pontos completando desafios.
        </p>
      </div>

      {/* Barra de Busca e Filtros */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input 
              icon={Search}
              placeholder="Buscar missões..."
            />
          </div>
          <Button variant="outline" icon={Filter}>Filtros</Button>
        </div>
        
        <div className="flex gap-4 mt-4">
          <Button size="sm">Todas</Button>
          <Button variant="outline" size="sm">Avalições</Button>
          <Button variant="outline" size="sm">Compartilhamento</Button>
          <Button variant="outline" size="sm">Compras</Button>
          <Button variant="outline" size="sm">Pesquisas</Button>
        </div>
      </Card>

      {/* Lista de Missões */}
      <div className="grid gap-6">
        <Card className="p-6" hover>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">Avalie Nossa Nova Coleção</h3>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full font-medium">
                    +200 pontos
                  </span>
                </div>
                <p className="text-slate-400 mb-3">
                  Compartilhe sua opinião sobre nossa nova coleção de roupas de verão. 
                  Sua avaliação ajuda outros clientes e nos ajuda a melhorar.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~10 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>342 participaram</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Fácil</span>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg">Participar</Button>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Empresa:</strong> ModaStyle Brasil • 
              <strong className="text-white ml-2">Categoria:</strong> Avaliação de Produto
            </p>
          </div>
        </Card>

        <Card className="p-6" hover>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">Compartilhe no Instagram</h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full font-medium">
                    +150 pontos
                  </span>
                </div>
                <p className="text-slate-400 mb-3">
                  Publique uma foto usando nossos produtos no Instagram com a hashtag #TechCorpStyle 
                  e seja sorteado para ganhar produtos gratuitos.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~5 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>128 participaram</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Fácil</span>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg">Participar</Button>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Empresa:</strong> TechCorp Brasil • 
              <strong className="text-white ml-2">Categoria:</strong> Redes Sociais
            </p>
          </div>
        </Card>

        <Card className="p-6" hover>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">Pesquisa de Satisfação</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full font-medium">
                    +100 pontos
                  </span>
                </div>
                <p className="text-slate-400 mb-3">
                  Responda nossa pesquisa rápida sobre sua experiência de compra. 
                  Suas respostas nos ajudam a melhorar nossos serviços.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~3 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>89 participaram</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Muito Fácil</span>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg">Participar</Button>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Empresa:</strong> SuperMercado Online • 
              <strong className="text-white ml-2">Categoria:</strong> Pesquisa
            </p>
          </div>
        </Card>

        <Card className="p-6 border-yellow-500/20">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">Missão Especial VIP</h3>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full font-medium">
                    +500 pontos
                  </span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs rounded-full">
                    🔥 DESTAQUE
                  </span>
                </div>
                <p className="text-slate-400 mb-3">
                  Participe do nosso teste beta exclusivo e seja um dos primeiros a experimentar 
                  nossa nova plataforma. Disponível apenas para usuários nível 10+.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~30 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>12 participaram</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Avançado</span>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg" variant="orange">Participar</Button>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Empresa:</strong> PremiAds • 
              <strong className="text-white ml-2">Categoria:</strong> Beta Testing
            </p>
          </div>
        </Card>
      </div>

      {/* Estatísticas de Missões */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Suas Estatísticas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">23</p>
            <p className="text-slate-400 text-sm">Concluídas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-400">2,847</p>
            <p className="text-slate-400 text-sm">Pontos Ganhos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">94%</p>
            <p className="text-slate-400 text-sm">Taxa de Sucesso</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-slate-400 text-sm">Nível Atual</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 