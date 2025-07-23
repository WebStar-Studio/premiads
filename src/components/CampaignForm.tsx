'use client';

import React, { useState } from 'react';
import { Modal, Stepper, Button, Card, Input, Slider } from '@/components/ui';
import { 
  Camera, 
  Video, 
  MapPin, 
  Users, 
  Tag, 
  FileText, 
  Star,
  ChevronLeft,
  X,
  Plus,
  Trash2
} from 'lucide-react';

interface CampaignFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: CampaignFormData) => void;
  editData?: Partial<CampaignFormData>;
  isEditing?: boolean;
}

interface CampaignFormData {
  // Etapa 1: Informações Básicas
  title: string;
  description: string;
  missionType: string;
  totalCost: number;
  targetAudience: {
    ageRange: string;
    interests: string;
    gender: string;
  };

  // Etapa 2: Requisitos
  requirements: string[];

  // Etapa 3: Recompensas
  cashbackEnabled: boolean;
  cashbackAmount: number;
  rewardsPerParticipant: number;
  missionRewards: number;
  maxParticipants: number;
  extraPrize: boolean;

  // Etapa 4: Datas
  startDate: string;
  endDate: string;
}

const initialFormData: CampaignFormData = {
  title: '',
  description: '',
  missionType: '',
  totalCost: 1000,
  targetAudience: {
    ageRange: '',
    interests: '',
    gender: ''
  },
  requirements: [],
  cashbackEnabled: false,
  cashbackAmount: 5,
  rewardsPerParticipant: 10,
  missionRewards: 10,
  maxParticipants: 100,
  extraPrize: false,
  startDate: '',
  endDate: ''
};

const steps = [
  'Informações Básicas',
  'Requisitos', 
  'Recompensas',
  'Datas'
];

const missionTypes = [
  { id: 'photo', label: 'Envio de Foto', icon: Camera, description: 'Envie uma foto conforme os requisitos da missão.' },
  { id: 'video', label: 'Envio de Vídeo', icon: Video, description: 'Grave e envie um vídeo seguindo as diretrizes.' },
  { id: 'checkin', label: 'Check-in Local', icon: MapPin, description: 'Faça check-in em um local específico.' },
  { id: 'social', label: 'Ação Social', icon: Users, description: 'Realize uma ação em suas redes sociais (curtir, compartilhar, comentar).' },
  { id: 'coupon', label: 'Uso de Cupom', icon: Tag, description: 'Utilize um cupom de desconto em uma compra ou serviço.' },
  { id: 'survey', label: 'Pesquisa', icon: FileText, description: 'Responda a uma pesquisa de opinião ou mercado.' },
  { id: 'review', label: 'Avaliação de Produto/Serviço', icon: Star, description: 'Escreva uma avaliação sobre um produto ou serviço.' }
];

export const CampaignForm: React.FC<CampaignFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit,
  editData,
  isEditing = false
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CampaignFormData>(
    editData ? { ...initialFormData, ...editData } : initialFormData
  );
  const [newRequirement, setNewRequirement] = useState('');

  // Reset form data when modal opens with new data
  React.useEffect(() => {
    if (isOpen && editData) {
      setFormData({ ...initialFormData, ...editData });
    } else if (isOpen && !editData) {
      setFormData(initialFormData);
      setCurrentStep(0);
    }
  }, [isOpen, editData]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
    setFormData(initialFormData);
    setCurrentStep(0);
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Custo e Saldo */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Custo total da campanha:
          </label>
          <div className="text-right text-blue-400 font-medium">
            {formData.totalCost.toLocaleString()} rifas
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Seu saldo atual:
          </label>
          <div className="text-right text-blue-400 font-medium">
            3.581 rifas
          </div>
        </div>
      </div>

      {/* Título da Missão */}
      <Input
        label="Título da Missão"
        placeholder="Ex: Compartilhe nossa marca nas redes sociais"
        value={formData.title}
        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
      />

      {/* Descrição */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Descrição
        </label>
        <textarea
          placeholder="Descreva o que os usuários precisam fazer para completar esta missão"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full h-24 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Tipo de Missão */}
      <div>
        <label className="block text-sm font-medium text-white mb-4">
          Tipo de Missão
        </label>
        <div className="grid grid-cols-2 gap-4">
          {missionTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card
                key={type.id}
                className={`p-4 cursor-pointer transition-all ${
                  formData.missionType === type.id 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'hover:border-slate-600'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, missionType: type.id }))}
              >
                <div className="flex items-start gap-3">
                  <IconComponent className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-sm">{type.label}</h4>
                    <p className="text-slate-400 text-xs mt-1">{type.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Público Alvo */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-400" />
          <label className="text-sm font-medium text-white">
            Filtros Avançados de Público
          </label>
        </div>
        
        <div className="space-y-4">
          <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Faixa Etária</option>
            <option value="18-25">18-25 anos</option>
            <option value="26-35">26-35 anos</option>
            <option value="36-45">36-45 anos</option>
            <option value="46+">46+ anos</option>
          </select>

          <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Região</option>
            <option value="norte">Norte</option>
            <option value="nordeste">Nordeste</option>
            <option value="centro-oeste">Centro-Oeste</option>
            <option value="sudeste">Sudeste</option>
            <option value="sul">Sul</option>
          </select>

          <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Interesses</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="moda">Moda</option>
            <option value="esportes">Esportes</option>
            <option value="culinaria">Culinária</option>
            <option value="viagem">Viagem</option>
          </select>

          <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="todos">Todos</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Requisitos da Missão</h3>
        <p className="text-slate-400 text-sm mb-4">
          Adicione os requisitos que o usuário precisa cumprir para completar esta missão.
        </p>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Ex: Enviar foto com o produto"
            value={newRequirement}
            onChange={(e) => setNewRequirement(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={addRequirement} icon={Plus} size="sm">
            Adicionar
          </Button>
        </div>

        {formData.requirements.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <p>Nenhum requisito adicionado. Adicione pelo menos um requisito para esta missão.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {formData.requirements.map((requirement, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                <span className="text-white">{requirement}</span>
                <button
                  onClick={() => removeRequirement(index)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      {/* Saldo disponível */}
      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-300 text-sm">
          ⚠️ <strong>Saldo disponível: 3581 créditos</strong>
        </p>
        <p className="text-yellow-200 text-xs mt-1">
          Os créditos são consumidos quando a campanha é publicada. Cada rifa atribui à missão consome 1 crédito da sua conta.
        </p>
      </div>

      {/* Sistema de Cashback */}
      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-green-300 font-medium">✅ Sistema de Cashback</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.cashbackEnabled}
              onChange={(e) => setFormData(prev => ({ ...prev, cashbackEnabled: e.target.checked }))}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-green-200 text-sm">
          Para cada rifa disponibilizada na campanha, os participantes poderão resgatar cashback em dinheiro. 
          Cada rifa vale até <strong>R$ {formData.cashbackAmount.toFixed(2)}</strong> de cashback. 
          Defina quantos cashbacks estarão disponíveis para resgate.
        </p>
      </div>

      {/* Rifas por Participante */}
      <div className="space-y-4">
        <h4 className="text-white font-medium">Rifas por Participante</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-600 text-sm">{formData.rewardsPerParticipant}</span>
          <span className="text-yellow-600 text-sm">{formData.missionRewards}</span>
        </div>
        <Slider
          min={10}
          max={100}
          value={formData.rewardsPerParticipant}
          onChange={(value) => {
            setFormData(prev => ({ 
              ...prev, 
              rewardsPerParticipant: value,
              missionRewards: value 
            }));
          }}
          color="orange"
          showValue={false}
        />
      </div>

      {/* Rifas da Missão */}
      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
        <h4 className="text-yellow-300 font-medium mb-2">⚠️ Rifas da Missão</h4>
        <p className="text-yellow-200 text-sm mb-2">
          Defina quantas rifas cada participante receberá ao concluir esta missão. 
          Este valor será desbitado do seu saldo de créditos no momento da criação da campanha.
        </p>
        <p className="text-yellow-200 text-sm">
          ⚠️ <strong>{formData.missionRewards} créditos serão debitados da sua conta.</strong>
        </p>
      </div>

      {/* Máximo de Participantes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-medium">Máximo de Participantes</h4>
          <div className="flex items-center gap-4">
            <span className="text-red-600 text-sm">{formData.maxParticipants}</span>
            <span className="text-red-600 text-sm">100</span>
          </div>
        </div>
        <Slider
          min={100}
          max={1000}
          value={formData.maxParticipants}
          onChange={(value) => setFormData(prev => ({ ...prev, maxParticipants: value }))}
          color="orange"
          showValue={false}
        />
      </div>

      {/* Prêmio Extra */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-medium">Prêmio Extra</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.extraPrize}
              onChange={(e) => setFormData(prev => ({ ...prev, extraPrize: e.target.checked }))}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-slate-400 text-sm">
          Ofereça um prêmio adicional para os participantes
        </p>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      {/* Datas */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Data de Início
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Data de Término
          </label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Resumo da Missão */}
      <Card className="p-6 bg-slate-800">
        <h3 className="text-lg font-semibold text-white mb-4">Resumo da Missão</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Nome:</span>
            <span className="text-white">{formData.title || 'Não definido'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Tipo:</span>
            <span className="text-white">
              {formData.missionType ? 
                missionTypes.find(t => t.id === formData.missionType)?.label : 
                'Não definido'
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Requisitos:</span>
            <span className="text-white">{formData.requirements.length || 'Nenhum definido'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Pontos:</span>
            <span className="text-white">{formData.rewardsPerParticipant}-{formData.missionRewards}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Duração:</span>
            <span className="text-white">
              {formData.startDate && formData.endDate ? 
                `${formData.startDate} até ${formData.endDate}` : 
                '5 dias'
              }
            </span>
          </div>
          <div className="border-t border-slate-700 pt-3">
            <div className="text-slate-400 text-xs">Filtro de público:</div>
            <ul className="mt-1 text-slate-300">
              <li>• Faixa etária: 18, 65</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderStep1();
      case 1: return renderStep2();
      case 2: return renderStep3();
      case 3: return renderStep4();
      default: return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.title && formData.description && formData.missionType;
      case 1: return formData.requirements.length > 0;
      case 2: return true;
      case 3: return formData.startDate && formData.endDate;
      default: return false;
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="xl" 
      title={isEditing ? "Editar Campanha" : "Criar Nova Campanha"}
    >
      <div className="p-6 space-y-6">
        {/* Header com custo e saldo */}
        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-lg">
          <div>
            <span className="text-slate-400 text-sm">Custo total da campanha:</span>
            <span className="text-blue-400 font-medium ml-2">{formData.totalCost.toLocaleString()} rifas</span>
          </div>
          <div>
            <span className="text-slate-400 text-sm">Seu saldo atual:</span>
            <span className="text-blue-400 font-medium ml-2">3.581 rifas</span>
          </div>
        </div>

        {/* Stepper */}
        <Stepper 
          steps={steps} 
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        {/* Content */}
        <div className="min-h-[400px]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-800">
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack} icon={ChevronLeft}>
                Voltar
              </Button>
            )}
            <Button variant="outline" onClick={onClose} icon={X}>
              Cancelar
            </Button>
          </div>
          
          {currentStep < steps.length - 1 ? (
            <Button 
              onClick={handleNext} 
              disabled={!canProceed()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Próximo
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={!canProceed()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isEditing ? "Salvar Alterações" : "Criar Campanha"}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}; 