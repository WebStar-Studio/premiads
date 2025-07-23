import React from 'react';
import { Card, Button, Input } from '@/components/ui';
import { QrCode, Hash, History, CheckCircle } from 'lucide-react';

export default function CouponValidationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Validação de Cupom</h1>
        <p className="text-slate-400 mt-2">
          Valide cupons apresentados pelos usuários através de QR Code ou código manual.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Validação por QR Code */}
        <Card className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Escanear QR Code</h2>
            <p className="text-slate-400 mb-6">
              Use a câmera para escanear o código QR do cupom
            </p>
            <Button>Abrir Scanner</Button>
          </div>
        </Card>

        {/* Validação Manual */}
        <Card className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hash className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Inserção Manual</h2>
            <p className="text-slate-400 mb-6">
              Digite o código do cupom manualmente
            </p>
            <div className="space-y-4">
              <Input 
                placeholder="Digite o código do cupom"
                className="text-center font-mono"
              />
              <Button variant="orange">Validar Cupom</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Histórico de Validações */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <History className="w-6 h-6 text-slate-400" />
          <h2 className="text-xl font-semibold text-white">Histórico de Validações</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-medium">COUP-2024-ABC123</p>
                <p className="text-slate-400 text-sm">Validado há 5 minutos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">João Silva</p>
              <p className="text-slate-400 text-sm">Desconto de 20%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-medium">COUP-2024-XYZ789</p>
                <p className="text-slate-400 text-sm">Validado há 12 minutos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">Maria Santos</p>
              <p className="text-slate-400 text-sm">Cashback de R$ 15</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-medium">COUP-2024-DEF456</p>
                <p className="text-slate-400 text-sm">Validado há 1 hora</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">Carlos Oliveira</p>
              <p className="text-slate-400 text-sm">Produto grátis</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">Ver Mais</Button>
        </div>
      </Card>
    </div>
  );
} 