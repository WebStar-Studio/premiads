import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  color?: 'blue' | 'purple' | 'orange';
}

export const Slider: React.FC<SliderProps> = ({ 
  min, 
  max, 
  value, 
  onChange, 
  label,
  showValue = true,
  disabled = false,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600'
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`space-y-2 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-white">{label}</label>
          {showValue && (
            <span className="text-sm text-slate-400">{value}</span>
          )}
        </div>
      )}
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          disabled={disabled}
          className={`
            w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-700
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:${colorClasses[color]}
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:${colorClasses[color]}
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:appearance-none
          `}
          style={{
            background: `linear-gradient(to right, ${color === 'blue' ? '#2563eb' : color === 'purple' ? '#9333ea' : '#ea580c'} 0%, ${color === 'blue' ? '#2563eb' : color === 'purple' ? '#9333ea' : '#ea580c'} ${percentage}%, #374151 ${percentage}%, #374151 100%)`
          }}
        />
      </div>
    </div>
  );
}; 