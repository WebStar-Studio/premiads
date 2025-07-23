import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: 'purple' | 'orange' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = 'none',
  onClick,
  ...rest
}) => {
  const baseClasses = 'rounded-xl border border-slate-800 transition-all duration-200';
  
  const backgrounds = {
    none: 'bg-slate-900',
    purple: 'bg-gradient-to-br from-slate-900 to-slate-900/50 border-purple-500/20',
    orange: 'bg-gradient-to-br from-slate-900 to-slate-900/50 border-orange-500/20'
  };

  const hoverEffect = hover || onClick ? 'hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${backgrounds[gradient]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} onClick={onClick} {...rest}>
      {children}
    </div>
  );
}; 