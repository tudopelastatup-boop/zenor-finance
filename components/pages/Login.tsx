import React from 'react';
import { Page } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail, Lock } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  return (
    <div className="flex min-h-screen w-full bg-background-dark">
      {/* Left: Image (Hidden on Mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img 
          src="Mockup.png"
          alt="Luxury Finance" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-background-dark"></div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-20 relative">
        <div className="w-full max-w-[420px] flex flex-col">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-12">
            <img 
              src="Símbolo- Marca D_água 1.png"
              alt="Zenor Finance"
              className="h-20 w-auto object-contain mb-6"
            />
            <div className="h-[1px] w-12 bg-primary/40 mb-4"></div>
            <p className="text-white/40 text-[10px] font-medium tracking-[0.25em] uppercase text-center">
              Entre escolhas e destinos, somos o guia
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNavigate(Page.DASHBOARD); }}>
            <Input 
              label="E-mail" 
              placeholder="nome@exemplo.com" 
              type="email" 
              icon={<Mail size={16} />}
            />
            <Input 
              label="Senha" 
              placeholder="••••••••" 
              type="password" 
              icon={<Lock size={16} />}
            />
            
            <div className="flex justify-end">
              <a href="#" className="text-primary/70 hover:text-primary text-[10px] font-bold tracking-[0.15em] uppercase transition-colors">
                Esqueci minha senha
              </a>
            </div>

            <Button fullWidth type="submit">Entrar</Button>

            <div className="pt-8 text-center border-t border-white/5 mt-8">
              <p className="text-white/40 text-[10px] tracking-widest uppercase">
                Ainda não possui acesso? 
                <button 
                  type="button"
                  onClick={() => onNavigate(Page.REGISTER)}
                  className="text-white hover:text-primary font-bold transition-colors ml-2 uppercase"
                >
                  Criar conta
                </button>
              </p>
            </div>
          </form>

          {/* Footer */}
          <footer className="mt-16 flex flex-col items-center gap-4 text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-white/50 transition-colors">Termos</a>
            <p>Zenor Finance © 2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
};