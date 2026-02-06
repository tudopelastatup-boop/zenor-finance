import React from 'react';
import { Button } from '../ui/Button';
import { Target } from 'lucide-react';

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);
import { MOCK_GOALS } from '../../constants';

export const Goals: React.FC = () => {
  return (
    <div className="p-6 lg:p-12 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Planejamento</span>
          </div>
          <h2 className="font-display text-white text-3xl lg:text-5xl font-bold tracking-tight mb-2">METAS PESSOAIS</h2>
          <p className="text-primary/60 text-xs lg:text-sm font-medium uppercase tracking-[0.2em]">Acompanhe suas metas financeiras</p>
        </div>
      </header>

      {/* WhatsApp CTA */}
      <section className="bg-background-card border border-border-dark p-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
            <WhatsAppIcon size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold">Cadastre metas via WhatsApp</h3>
            <p className="text-white/40 text-sm mt-1">Converse com nossa IA para criar e acompanhar suas metas automaticamente.</p>
          </div>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá! Quero cadastrar uma nova meta financeira."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Conectar via WhatsApp</Button>
        </a>
      </section>

      {/* Goals Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_GOALS.map((goal) => {
          const progress = Math.round((goal.currentAmount / goal.targetAmount) * 100);
          return (
            <div key={goal.id} className="bg-background-card border border-border-dark p-8 rounded relative overflow-hidden hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <span className="text-primary/60 text-[10px] font-black uppercase tracking-[0.2em]">{goal.category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{goal.title}</h3>
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                {/* Amount info */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Acumulado</p>
                    <p className="text-white text-2xl font-black tracking-tighter">
                      R$ {goal.currentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Objetivo</p>
                    <p className="text-primary text-lg font-bold tracking-tighter">
                      R$ {goal.targetAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(progress, 100)}%`,
                        backgroundColor: progress >= 75 ? '#10b981' : progress >= 50 ? '#B18846' : '#ef4444',
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{
                      color: progress >= 75 ? '#10b981' : progress >= 50 ? '#B18846' : '#ef4444',
                    }}>
                      {progress}% concluído
                    </span>
                    <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                      Prazo: {goal.deadline}
                    </span>
                  </div>
                </div>

              </div>

              <img
                src="Submarca- Marca D_água 1.png"
                alt=""
                className="absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.04] rotate-12"
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};
