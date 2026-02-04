import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger' | 'secondary';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background-dark hover:brightness-110 shadow-lg shadow-primary/20",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
    outline: "border border-primary/50 text-primary hover:bg-primary hover:text-background-dark",
    ghost: "bg-transparent text-white/60 hover:text-white hover:bg-white/5",
    danger: "bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900/40"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
};