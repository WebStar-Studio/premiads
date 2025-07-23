import React from 'react';

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface LineChartProps {
  data: ChartDataPoint[];
  height?: number;
  title?: string;
  className?: string;
}

interface BarChartProps {
  data: ChartDataPoint[];
  height?: number;
  title?: string;
  className?: string;
}

interface DonutChartProps {
  data: ChartDataPoint[];
  title?: string;
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  height = 200, 
  title, 
  className = '' 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (point.value / maxValue) * 80; // 80% of height for data, 20% for padding
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={`${className}`}>
      {title && <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>}
      <div className="relative" style={{ height: `${height}px` }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(51, 65, 85)" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Line */}
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="0.5"
            points={points}
          />
          
          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (point.value / maxValue) * 80;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="0.8"
                fill="#3B82F6"
                className="cursor-pointer"
              />
            );
          })}
        </svg>
        
        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 mt-2">
          {data.map((point, index) => (
            <span key={index} className="text-center">
              {point.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  height = 200, 
  title, 
  className = '' 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>}
      <div className="space-y-3" style={{ height: `${height}px`, overflowY: 'auto' }}>
        {data.map((point, index) => {
          const percentage = (point.value / maxValue) * 100;
          const color = point.color || (index % 2 === 0 ? 'from-purple-500 to-purple-700' : 'from-orange-400 to-orange-600');
          
          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">{point.label}</span>
                <span className="text-white font-medium">{point.value.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-700 ease-out`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const DonutChart: React.FC<DonutChartProps> = ({ 
  data, 
  title, 
  className = '' 
}) => {
  const total = data.reduce((sum, point) => sum + point.value, 0);
  let currentAngle = 0;
  
  const colors = [
    'from-purple-500 to-purple-700',
    'from-orange-400 to-orange-600',
    'from-blue-500 to-blue-700',
    'from-green-500 to-green-700',
    'from-red-500 to-red-700'
  ];

  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>}
      <div className="flex items-center gap-8">
        {/* Chart */}
        <div className="relative w-32 h-32">
          <svg width="128" height="128" viewBox="0 0 128 128" className="transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="52"
              fill="none"
              stroke="rgb(51, 65, 85)"
              strokeWidth="8"
            />
            {data.map((point, index) => {
              const percentage = (point.value / total) * 100;
              const strokeDasharray = `${percentage * 3.27} 327`; // 327 is circumference of circle with r=52
              const strokeDashoffset = -currentAngle * 3.27;
              currentAngle += percentage;
              
              return (
                <circle
                  key={index}
                  cx="64"
                  cy="64"
                  r="52"
                  fill="none"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-700 ease-out"
                />
              );
            })}
            
            {/* Gradients */}
            <defs>
              {data.map((_, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={index % 2 === 0 ? '#8B5CF6' : '#FB923C'} />
                  <stop offset="100%" stopColor={index % 2 === 0 ? '#7C3AED' : '#EA580C'} />
                </linearGradient>
              ))}
            </defs>
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{total.toLocaleString()}</div>
              <div className="text-xs text-slate-400">Total</div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="space-y-3">
          {data.map((point, index) => {
            const percentage = ((point.value / total) * 100).toFixed(1);
            return (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors[index] || colors[0]}`}
                />
                <div>
                  <div className="text-white font-medium">{point.label}</div>
                  <div className="text-slate-400 text-sm">{point.value.toLocaleString()} ({percentage}%)</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 