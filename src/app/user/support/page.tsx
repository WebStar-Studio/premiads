import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { HelpCircle, MessageSquare, Phone, Mail, Search, BookOpen, Video } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Central de Suporte</h1>
        <p className="text-slate-400 mt-2">
          Encontre respostas para suas dúvidas ou entre em contato conosco.
        </p>
      </div>

      {/* Busca Rápida */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Como podemos ajudar?</h2>
        <div className="flex gap-3">
          <Input 
            icon={Search}
            placeholder="Busque por palavras-chave: pontos, missões, recompensas..."
            className="flex-1"
          />
          <Button>Buscar</Button>
        </div>
      </Card>

      {/* Canais de Contato */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Chat Online</h3>
          <p className="text-slate-400 text-sm mb-4">
            Converse com nosso suporte em tempo real
          </p>
          <p className="text-green-300 text-sm mb-4">Online agora</p>
          <Button className="w-full">Iniciar Chat</Button>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-slate-400 text-sm mb-4">
            Envie sua dúvida por email
          </p>
          <p className="text-slate-400 text-sm mb-4">Resposta em até 24h</p>
          <Button variant="outline" className="w-full">Enviar Email</Button>
        </Card>

        <Card className="p-6 text-center" hover>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
          <p className="text-slate-400 text-sm mb-4">
            Ligue para nosso atendimento
          </p>
          <p className="text-slate-400 text-sm mb-4">Seg-Sex: 8h às 18h</p>
          <Button variant="outline" className="w-full">(11) 4000-0000</Button>
        </Card>
      </div>

      {/* FAQ */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Perguntas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Como faço para participar de uma missão?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              Para participar de uma missão, vá até a seção "Missões", escolha uma que interesse você, 
              leia as instruções e clique em "Participar". Siga os passos solicitados (como tirar uma foto 
              ou escrever um comentário) e envie sua submissão. Após aprovação, você receberá os pontos!
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Como resgatar meus pontos?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              Acesse a seção "Recompensas" para ver todos os prêmios disponíveis. Escolha o que deseja 
              resgatar, verifique se tem pontos suficientes e clique em "Resgatar". Você receberá um 
              cupom ou instrução sobre como utilizar sua recompensa.
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Como funcionam os sorteios?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              Use suas rifas para comprar bilhetes dos sorteios disponíveis. Cada sorteio tem um valor 
              diferente em rifas. Você pode comprar quantos bilhetes quiser (dentro do limite). 
              O sorteio é realizado de forma automática na data especificada.
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Como funciona o programa de indicações?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              Compartilhe seu link de indicação exclusivo com amigos. Quando eles se cadastrarem 
              e completarem sua primeira missão, você ganha 500 pontos e eles ganham 200 pontos de bônus. 
              Quanto mais amigos indicar, mais pontos você ganha!
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Minha submissão foi rejeitada. Por quê?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              Submissões podem ser rejeitadas por não seguir as instruções da missão, conter conteúdo 
              inadequado, ou não atender aos critérios de qualidade. Você receberá uma notificação com 
              o motivo da rejeição e pode tentar novamente seguindo as orientações.
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white font-medium">Como usar meu cashback?</span>
              <div className="text-slate-400 group-open:rotate-180 transition-transform">▼</div>
            </summary>
            <div className="p-4 text-slate-400 text-sm">
              O cashback pode ser resgatado via PIX (valor mínimo R$ 10), convertido em pontos (1:1), 
              usado como crédito para novas compras ou doado para instituições parceiras. 
              Acesse a seção "Cashback" para ver todas as opções disponíveis.
            </div>
          </details>
        </div>
      </Card>

      {/* Tutoriais */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Tutoriais</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Como começar na PremiAds</h3>
              <p className="text-slate-400 text-sm">Guia completo para novos usuários</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Maximizando seus pontos</h3>
              <p className="text-slate-400 text-sm">Dicas para ganhar mais pontos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Programa de indicações</h3>
              <p className="text-slate-400 text-sm">Como indicar amigos e ganhar bônus</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Sorteios e rifas</h3>
              <p className="text-slate-400 text-sm">Como participar dos sorteios</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Abrir Ticket */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Não encontrou sua resposta?</h2>
        <p className="text-slate-400 mb-6">
          Se você não encontrou a solução para seu problema, abra um ticket e nossa equipe 
          entrará em contato com você em até 24 horas.
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Seu nome" placeholder="Digite seu nome" />
            <Input label="Email" type="email" placeholder="seu@email.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Categoria
            </label>
            <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Selecione uma categoria</option>
              <option value="missoes">Problemas com missões</option>
              <option value="pontos">Questões sobre pontos</option>
              <option value="recompensas">Problemas com recompensas</option>
              <option value="sorteios">Dúvidas sobre sorteios</option>
              <option value="cashback">Problemas com cashback</option>
              <option value="conta">Problemas com a conta</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Descreva seu problema
            </label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-32 resize-none"
              placeholder="Descreva detalhadamente seu problema para que possamos ajudar melhor..."
            />
          </div>
        </div>
        
        <div className="mt-6">
          <Button size="lg">Enviar Ticket</Button>
        </div>
      </Card>

      {/* Status de Tickets */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Seus Tickets</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div>
              <p className="text-white font-medium">#12345 - Problema com resgate de pontos</p>
              <p className="text-slate-400 text-sm">Aberto há 2 dias</p>
            </div>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
              Em andamento
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div>
              <p className="text-white font-medium">#12340 - Dúvida sobre cashback</p>
              <p className="text-slate-400 text-sm">Resolvido há 1 semana</p>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
              Resolvido
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
} 