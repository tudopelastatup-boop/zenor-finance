import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Sparkles, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_INSIGHTS } from '../../constants';
import { Insight } from '../../types';

export const Insights: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [frequency, setFrequency] = useState(7);

  return (
    <div className="p-6 lg:p-12 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
            <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Inteligência Artificial</span>
            </div>
            <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">AI Insights</h2>
            <p className="text-white/40 text-base mt-2">Recomendações personalizadas baseadas no seu perfil financeiro.</p>
        </div>
        <Button>Atualizar Insights</Button>
      </header>

      {/* Configuration Card */}
      <section className="bg-background-card border border-border-dark p-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded">
        <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Clock size={32} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">Frequência de Análise</h3>
                <p className="text-white/40 text-sm mt-1">Defina com que frequência nossa IA deve analisar suas contas.</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 min-w-[300px] w-full md:w-auto">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-primary">
                <span>Frequência</span>
                <span>A cada {frequency} dia{frequency > 1 ? 's' : ''}</span>
            </div>
            <div className="flex gap-2">
              {[1, 3, 7, 15, 30].map((val) => (
                <button
                  key={val}
                  onClick={() => setFrequency(val)}
                  className={`flex-1 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                    frequency === val
                      ? 'bg-primary text-background-dark border-primary'
                      : 'bg-white/[0.02] text-white/60 border-white/10 hover:border-primary/30'
                  }`}
                >
                  {val}d
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-white/30 font-mono uppercase">
                <span>1 dia</span>
                <span>30 dias</span>
            </div>
        </div>
      </section>

      {/* Insights List */}
      <section className="space-y-6">
        <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Insights Recentes</h4>
        
        {MOCK_INSIGHTS.map((insight) => (
            <div 
                key={insight.id} 
                onClick={() => setSelectedInsight(insight)}
                className="bg-background-card border border-border-dark p-8 hover:border-primary/40 transition-all group rounded cursor-pointer"
            >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full border ${
                                insight.type === 'opportunity' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                insight.type === 'warning' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                'bg-blue-500/10 text-blue-500 border-blue-500/20'
                            }`}>
                                {insight.type === 'opportunity' ? 'Oportunidade' : insight.type === 'warning' ? 'Alerta' : 'Dica'}
                            </span>
                            <span className="text-white/40 text-xs">{insight.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{insight.title}</h3>
                        <p className="text-white/60 leading-relaxed max-w-3xl line-clamp-2">
                            {insight.description}
                        </p>
                    </div>
                    {/* Action buttons removed as requested, just indicator icon */}
                    <div className="flex items-center justify-end">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-primary group-hover:border-primary transition-colors">
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 pt-8">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mostrando 1-2 de 2</span>
            <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5 disabled:opacity-50">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-background-dark font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5 disabled:opacity-50">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>

        {/* Modal */}
        <Modal
            isOpen={!!selectedInsight}
            onClose={() => setSelectedInsight(null)}
            title="Detalhe do Insight"
        >
            {selectedInsight && (
                <div className="space-y-6">
                     <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full border ${
                            selectedInsight.type === 'opportunity' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                            selectedInsight.type === 'warning' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                            'bg-blue-500/10 text-blue-500 border-blue-500/20'
                        }`}>
                            {selectedInsight.type === 'opportunity' ? 'Oportunidade' : selectedInsight.type === 'warning' ? 'Alerta' : 'Dica'}
                        </span>
                        <div className="flex items-center gap-2 text-white/40 text-xs">
                             <Calendar size={12} />
                             <span>{selectedInsight.date}</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">{selectedInsight.title}</h2>
                        <div className="bg-white/5 p-6 rounded border border-white/10">
                            <p className="text-white/80 leading-relaxed">
                                {selectedInsight.description}
                            </p>
                        </div>
                    </div>
                    
                    {/* Action button removed, purely informational */}

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                        <Button fullWidth variant="ghost" onClick={() => setSelectedInsight(null)}>
                            Fechar
                        </Button>
                    </div>
                </div>
            )}
        </Modal>

      </section>
    </div>
  );
};