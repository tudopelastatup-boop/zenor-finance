import React from 'react';
import { Page } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { User, Mail, Lock, Phone } from 'lucide-react';

interface RegisterProps {
  onNavigate: (page: Page) => void;
}

export const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  return (
    <div className="flex min-h-screen w-full bg-background-dark">
      {/* Right: Image (Desktop) - Swapped side for variety */}
      <div className="hidden lg:block lg:w-1/2 lg:order-2 relative overflow-hidden">
        <img 
          src="Mockup.png"
          alt="Financial Growth" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-background-dark"></div>
      </div>

      {/* Left: Form */}
      <div className="w-full lg:w-1/2 lg:order-1 flex flex-col items-center justify-center p-8 lg:p-20 overflow-y-auto">
        <div className="w-full max-w-[420px]">
            <div className="mb-10 text-center">
                <img 
                    src="Símbolo- Marca D_água 1.png"
                    alt="Zenor Finance" 
                    className="h-14 w-auto object-contain mx-auto mb-6"
                />
                <h1 className="font-display text-white text-xl font-light tracking-[0.3em] mb-2 uppercase">CRIAR CONTA</h1>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Bem-vindo à excelência na gestão financeira</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate(Page.DASHBOARD); }}>
                <Input label="Nome Completo" placeholder="Digite seu nome" icon={<User size={16} />} />
                <Input label="E-mail" placeholder="seu@email.com" type="email" icon={<Mail size={16} />} />
                <Input label="WhatsApp" placeholder="(00) 00000-0000" type="tel" icon={<Phone size={16} />} />
                <Input label="Senha" placeholder="••••••••" type="password" icon={<Lock size={16} />} />

                <div className="pt-6">
                    <Button fullWidth type="submit">Criar Conta</Button>
                </div>

                <div className="flex justify-center pt-6">
                    <button 
                        type="button"
                        onClick={() => onNavigate(Page.LOGIN)}
                        className="text-white/40 hover:text-primary text-[11px] uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2"
                    >
                        Já tenho uma conta. Entrar
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};