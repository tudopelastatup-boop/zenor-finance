import React, { useState } from 'react';
import { Page } from '../types';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Sparkles, 
  CreditCard, 
  User, 
  LifeBuoy, 
  LogOut, 
  Menu, 
  X,
  AlertCircle
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    onNavigate(Page.LOGIN);
  };

  const NavItem = ({ page, icon, label }: { page: Page; icon: React.ReactNode; label: string }) => {
    const isActive = currentPage === page;
    return (
      <button
        onClick={() => {
          onNavigate(page);
          setIsMobileMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 w-full transition-all group rounded-r lg:rounded mb-1
          ${isActive 
            ? 'bg-primary text-background-dark font-bold' 
            : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
      >
        <span className={isActive ? 'text-background-dark' : 'group-hover:text-primary transition-colors'}>
          {icon}
        </span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </button>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-background-sidebar border-r border-border-dark">
      {/* Brand */}
      <div className="p-8 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img 
            src="Logo Principal- Marca D_água 1.png"
            alt="Zenor Finance"
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto">
        <NavItem page={Page.DASHBOARD} icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem page={Page.TRANSACTIONS} icon={<ArrowLeftRight size={20} />} label="Transações" />
        <NavItem page={Page.INSIGHTS} icon={<Sparkles size={20} />} label="AI Insights" />
        <NavItem page={Page.SUBSCRIPTION} icon={<CreditCard size={20} />} label="Assinatura" />
        <NavItem page={Page.ACCOUNT} icon={<User size={20} />} label="Minha Conta" />
        <NavItem page={Page.SUPPORT} icon={<LifeBuoy size={20} />} label="Suporte" />
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-white/5 bg-background-sidebar">
        <button 
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center gap-3 text-white/40 hover:text-red-400 px-4 transition-colors w-full group"
        >
          <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
          <span className="text-xs uppercase tracking-widest">Sair</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-16 bg-background-sidebar border-b border-border-dark flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-3">
          <img 
            src="Logo Principal- Marca D_água 1.png"
            alt="Zenor Finance"
            className="h-11 w-auto object-contain"
          />
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full pt-16 lg:pt-0 scroll-smooth">
        {children}
      </main>

      {/* Logout Confirmation Modal */}
      <Modal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        title="Confirmar Saída"
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center gap-4 py-4">
             <AlertCircle size={48} className="text-primary" strokeWidth={1.5} />
             <p className="text-white/80">Tem certeza que deseja encerrar sua sessão?</p>
          </div>
          <div className="flex gap-4">
             <Button fullWidth variant="ghost" onClick={() => setIsLogoutModalOpen(false)}>Cancelar</Button>
             <Button fullWidth onClick={handleLogout}>Sim, Sair</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};