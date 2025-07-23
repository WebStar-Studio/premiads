import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { User, Building, Mail, Phone, MapPin, Globe, Save, Upload } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Perfil</h1>
        <p className="text-slate-400 mt-2">
          Gerencie as informações do seu perfil e dados da empresa.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Foto de Perfil */}
        <div className="lg:col-span-1">
          <Card className="p-6 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">TechCorpBrasil</h2>
            <p className="text-slate-400 mb-4">Empresa de Tecnologia</p>
            <Button icon={Upload} variant="outline" className="w-full">
              Alterar Logo
            </Button>
          </Card>
        </div>

        {/* Informações da Empresa */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-slate-400" />
              <h2 className="text-xl font-semibold text-white">Dados da Empresa</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nome da Empresa"
                placeholder="Nome da sua empresa"
                defaultValue="TechCorp Brasil Ltda."
              />
              <Input
                label="CNPJ"
                placeholder="00.000.000/0001-00"
                defaultValue="12.345.678/0001-90"
              />
              <Input
                label="Razão Social"
                placeholder="Razão social da empresa"
                defaultValue="TechCorp Brasil Tecnologia Ltda."
              />
              <Input
                label="Inscrição Estadual"
                placeholder="000.000.000.000"
                defaultValue="123.456.789.012"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-slate-400" />
              <h2 className="text-xl font-semibold text-white">Informações de Contato</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email Principal"
                type="email"
                placeholder="contato@empresa.com"
                defaultValue="contato@techcorpbrasil.com"
                icon={Mail}
              />
              <Input
                label="Telefone"
                placeholder="(11) 99999-9999"
                defaultValue="(11) 3456-7890"
                icon={Phone}
              />
              <Input
                label="Website"
                placeholder="https://www.empresa.com"
                defaultValue="https://www.techcorpbrasil.com"
                icon={Globe}
              />
              <Input
                label="LinkedIn"
                placeholder="https://linkedin.com/company/empresa"
                defaultValue="https://linkedin.com/company/techcorpbrasil"
              />
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
                  defaultValue="01234-567"
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
                    defaultValue="Av. Paulista, 1000"
                  />
                </div>
                <Input
                  label="Número"
                  placeholder="123"
                  defaultValue="1000"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Complemento"
                  placeholder="Apto 45, Bloco B"
                  defaultValue="Sala 1201"
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

      {/* Descrição da Empresa */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Descrição da Empresa</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Sobre a Empresa
            </label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-32 resize-none"
              placeholder="Descreva sua empresa, produtos e serviços..."
              defaultValue="A TechCorp Brasil é uma empresa líder em soluções tecnológicas, oferecendo produtos inovadores e serviços de alta qualidade para empresas de todos os portes. Com mais de 10 anos de experiência no mercado, nossa missão é transformar ideias em realidade através da tecnologia."
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Setor de Atuação"
              placeholder="Tecnologia, Varejo, Saúde..."
              defaultValue="Tecnologia"
            />
            <Input
              label="Número de Funcionários"
              placeholder="1-10, 11-50, 51-200..."
              defaultValue="51-200"
            />
          </div>
        </div>
      </Card>

      {/* Configurações de Faturamento */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Configurações de Faturamento</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-medium mb-3">Método de Pagamento Padrão</h3>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="text-white">•••• •••• •••• 1234</p>
                    <p className="text-slate-400 text-sm">Expira em 12/2027</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Alterar</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">Próxima Cobrança</h3>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">R$ 129,90</p>
                  <p className="text-slate-400 text-sm">em 15/02/2024</p>
                </div>
                <Button variant="outline" size="sm">Ver Faturas</Button>
              </div>
            </div>
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