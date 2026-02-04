import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, icon, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <span className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">
          {label}
        </span>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`flex w-full rounded text-white border border-white/10 bg-white/[0.02] h-12 placeholder:text-white/20 px-4 ${icon ? 'pl-12' : ''} text-sm font-light transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};