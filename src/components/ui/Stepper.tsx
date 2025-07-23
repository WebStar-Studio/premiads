import React from 'react';
import { Check } from 'lucide-react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({ 
  steps, 
  currentStep, 
  onStepClick 
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1">
          {/* Step Circle */}
          <div 
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all cursor-pointer ${
              index < currentStep 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : index === currentStep 
                ? 'border-blue-600 text-blue-600 bg-slate-900' 
                : 'border-slate-600 text-slate-400 bg-slate-800'
            }`}
            onClick={() => onStepClick && onStepClick(index)}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          
          {/* Step Label */}
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${
              index <= currentStep ? 'text-white' : 'text-slate-400'
            }`}>
              {step}
            </p>
          </div>
          
          {/* Line to next step */}
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 ml-4 ${
              index < currentStep ? 'bg-blue-600' : 'bg-slate-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}; 