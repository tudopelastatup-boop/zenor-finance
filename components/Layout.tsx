import React, { useState } from 'react';
import { Page } from '../types';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import {
  LayoutDashboard,
  ArrowLeftRight,
  Target,
  Sparkles,
  CreditCard,
  User,
  LifeBuoy,
  LogOut,
  Menu,
  X,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const TUTORIAL_STEPS = [
  {
    page: Page.DASHBOARD,
    title: 'Bem-vindo ao Zenor Finance!',
    description: 'Vamos fazer um tour completo pelo seu painel. A cada passo, navegamos até a página correspondente para você conhecer cada funcionalidade na prática. Olhe a página atrás deste card!',
    tip: 'Clique em "Próximo" para começar o tour.',
  },
  {
    page: Page.DASHBOARD,
    title: 'Cards Financeiros',
    description: 'Os 3 cards dourados no topo mostram: Saldo Atual (quanto você tem disponível), Despesas Mensais (quanto gastou no período) e Ganhos Brutos (quanto entrou). A seta verde com "+" significa que subiu vs. o período anterior. A seta vermelha com "-" significa que caiu.',
    tip: 'Use o seletor "Este Mês" no topo direito para mudar o período: 7 dias, 30 dias ou ano inteiro.',
  },
  {
    page: Page.DASHBOARD,
    title: 'Metas no Dashboard',
    description: 'Logo abaixo dos cards, a seção "Metas Pessoais" mostra um resumo das suas metas com mini barras de progresso. Cada uma exibe o nome, a categoria, o % concluído e os valores acumulado vs. objetivo.',
    tip: 'Clique em "Ver todas" para abrir a página completa de metas.',
  },
  {
    page: Page.DASHBOARD,
    title: 'Gráficos',
    description: 'Rolando a página, você encontra dois gráficos: "Gastos por Categoria" (gráfico de pizza) mostra onde seu dinheiro vai — moradia, alimentação, lazer etc. "Receitas vs. Despesas" (gráfico de barras) compara o que entra e o que sai mês a mês.',
    tip: 'Passe o mouse sobre as barras e fatias para ver os valores detalhados.',
  },
  {
    page: Page.DASHBOARD,
    title: 'Transações Recentes',
    description: 'No final do Dashboard, a tabela "Transações Recentes" lista suas últimas movimentações com descrição (o que foi), categoria (tipo de gasto), data e valor. Entradas aparecem em verde com "+" e saídas em branco com "-".',
    tip: 'Clique em "Ver todas" para acessar o histórico completo na página de Transações.',
  },
  {
    page: Page.TRANSACTIONS,
    title: 'Página de Transações',
    description: 'Esta é a lista completa de todas as suas movimentações. A tabela mostra descrição, categoria, data, valor e status (concluído ou pendente). Você pode filtrar por tipo, buscar e exportar.',
    tip: 'Entradas (income) aparecem em verde e saídas (expense) em branco.',
  },
  {
    page: Page.GOALS,
    title: 'Página de Metas',
    description: 'Aqui você acompanha cada meta em detalhe: nome, categoria, valor acumulado vs. objetivo e uma barra de progresso. Verde (≥75%) = quase lá, dourado (≥50%) = no caminho, vermelho (<50%) = precisa de atenção.',
    tip: 'Você não cria metas aqui — use o "Conectar via WhatsApp" para a IA criar e atualizar suas metas pela conversa.',
  },
  {
    page: Page.INSIGHTS,
    title: 'AI Insights',
    description: 'Nesta página, a IA analisa suas finanças e gera cards de recomendações. Cada insight tem um tipo: "Oportunidade" (verde) para economia, "Alerta" (amarelo) para gastos atípicos, ou "Dica" (azul) para sugestões. No topo, defina a frequência de análise.',
    tip: 'Os botões 1d, 3d, 7d, 15d e 30d definem de quantos em quantos dias a IA reavalia suas contas.',
  },
  {
    page: Page.ACCOUNT,
    title: 'Conecte seu WhatsApp',
    description: 'Este é o passo mais importante! Em "Conexão WhatsApp", vincule seu número. Pelo WhatsApp, você conversa com a IA para: enviar comprovantes de gastos, cadastrar novas metas, receber alertas financeiros e alimentar todo o painel automaticamente.',
    tip: 'Insira seu número, clique em "Verificar e Salvar" e pronto — sua conta está conectada.',
  },
  {
    page: Page.DASHBOARD,
    title: 'Tudo pronto!',
    description: 'Você completou o tour! Agora explore à vontade. O mais importante: conecte seu WhatsApp para desbloquear todo o potencial da plataforma. O widget verde no canto inferior direito do Dashboard é um atalho rápido.',
    tip: 'Reveja este tutorial a qualquer momento clicando em "Tutorial" no menu lateral.',
  },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    onNavigate(Page.LOGIN);
  };

  const openTutorial = () => {
    setTutorialStep(0);
    setShowTutorial(true);
    setIsMobileMenuOpen(false);
    onNavigate(TUTORIAL_STEPS[0].page);
  };

  const goToStep = (step: number) => {
    setTutorialStep(step);
    onNavigate(TUTORIAL_STEPS[step].page);
  };

  const closeTutorial = () => {
    setShowTutorial(false);
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
        <NavItem page={Page.GOALS} icon={<Target size={20} />} label="Metas" />
        <NavItem page={Page.INSIGHTS} icon={<Sparkles size={20} />} label="AI Insights" />
        <NavItem page={Page.SUBSCRIPTION} icon={<CreditCard size={20} />} label="Assinatura" />
        <NavItem page={Page.ACCOUNT} icon={<User size={20} />} label="Minha Conta" />
        <NavItem page={Page.SUPPORT} icon={<LifeBuoy size={20} />} label="Suporte" />
      </nav>

      {/* Footer: Tutorial + Logout */}
      <div className="border-t border-white/5 bg-background-sidebar">
        <button
            onClick={openTutorial}
            className="flex items-center gap-3 text-white/40 hover:text-primary px-8 py-4 transition-colors w-full group"
        >
          <HelpCircle size={18} className="group-hover:text-primary transition-colors" />
          <span className="text-xs uppercase tracking-widest">Tutorial</span>
        </button>
        <div className="border-t border-white/5">
          <button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex items-center gap-3 text-white/40 hover:text-red-400 px-8 py-4 transition-colors w-full group"
          >
            <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
            <span className="text-xs uppercase tracking-widest">Sair</span>
          </button>
        </div>
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

      {/* Tutorial Onboarding - Floating Card */}
      {showTutorial && (
        <div className="fixed bottom-6 right-6 z-[100] w-[340px] bg-background-card border border-border-dark rounded shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark">
            <div className="flex items-center gap-2">
              <HelpCircle size={14} className="text-primary" />
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                Passo {tutorialStep + 1}/{TUTORIAL_STEPS.length}
              </span>
            </div>
            <button onClick={closeTutorial} className="text-white/30 hover:text-white transition-colors">
              <X size={14} />
            </button>
          </div>

          <div className="p-4">
            {/* Step indicator */}
            <div className="flex gap-1 mb-4">
              {TUTORIAL_STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                    i === tutorialStep ? 'bg-primary' : i < tutorialStep ? 'bg-primary/40' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            <h4 className="text-white text-base font-bold mb-2">{TUTORIAL_STEPS[tutorialStep].title}</h4>
            <p className="text-white/50 text-xs leading-relaxed mb-3">{TUTORIAL_STEPS[tutorialStep].description}</p>

            {/* Tip */}
            <div className="bg-primary/5 border border-primary/10 rounded px-3 py-2 mb-4">
              <p className="text-primary/70 text-[11px] leading-relaxed">
                <span className="font-bold">Dica: </span>
                {TUTORIAL_STEPS[tutorialStep].tip}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goToStep(Math.max(0, tutorialStep - 1))}
                disabled={tutorialStep === 0}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={12} />
                Anterior
              </button>
              <div className="flex-1" />
              {tutorialStep < TUTORIAL_STEPS.length - 1 ? (
                <button
                  onClick={() => goToStep(tutorialStep + 1)}
                  className="flex items-center justify-center gap-1 px-4 py-2 bg-primary text-background-dark rounded text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Próximo
                  <ChevronRight size={12} />
                </button>
              ) : (
                <button
                  onClick={closeTutorial}
                  className="flex items-center justify-center gap-1 px-4 py-2 bg-primary text-background-dark rounded text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Concluir
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
