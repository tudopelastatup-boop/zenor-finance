import React, { useState } from 'react';
import { Page } from '../../types';
import { Button } from '../ui/Button';
import { Wallet, ShoppingBag, TrendingUp, TrendingDown, MoreVertical, Calendar, Target, X } from 'lucide-react';

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);
import { 
  BarChart, 
  Bar, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { CHART_DATA, EXPENSE_CATEGORIES, RECENT_TRANSACTIONS, MOCK_GOALS } from '../../constants';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <div className="p-6 lg:p-12 space-y-12 relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-6 gap-6">
        <div>
          <h2 className="font-display text-white text-3xl lg:text-5xl font-bold tracking-tight mb-2">DASHBOARD</h2>
          <p className="text-primary/60 text-xs lg:text-sm font-medium uppercase tracking-[0.2em]">Resumo Financeiro Exclusivo</p>
        </div>
        <div className="flex items-center gap-3">
             <div className="relative">
                 <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                 <select className="bg-white/[0.02] border border-white/10 rounded pl-9 pr-4 py-2 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-primary appearance-none cursor-pointer hover:bg-white/[0.05] transition-colors">
                     <option>Este Mês</option>
                     <option>Últimos 7 dias</option>
                     <option>Últimos 30 dias</option>
                     <option>Este Ano</option>
                 </select>
             </div>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Primary */}
        <div className="bg-primary p-8 relative overflow-hidden group shadow-2xl rounded">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <p className="text-background-dark/70 text-[10px] font-black uppercase tracking-[0.2em]">Saldo Atual</p>
            <Wallet className="text-background-dark/50" />
          </div>
          <p className="text-background-dark tracking-tighter text-3xl lg:text-4xl font-black mb-4 relative z-10">R$ 45.250,00</p>
          <div className="flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <TrendingUp size={14} />
            <span>+2.4% vs anterior</span>
          </div>
          {/* Watermark Logo Symbol */}
          <img 
            src="Submarca- Marca D_água 2 (preto).png"
            alt="Watermark" 
            className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10 rotate-12 brightness-0"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-background-card p-8 border border-border-dark hover:border-primary/30 transition-all group rounded relative overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <p className="text-primary/60 text-[10px] font-black uppercase tracking-[0.2em]">Despesas Mensais</p>
            <ShoppingBag className="text-primary/40" />
          </div>
          <p className="text-white tracking-tighter text-3xl lg:text-4xl font-black mb-4 relative z-10">R$ 12.430,00</p>
          <div className="flex items-center gap-2 text-red-400 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <TrendingDown size={14} />
            <span>-5.2% vs anterior</span>
          </div>
          <img
            src="Submarca- Marca D_água 1.png"
            alt=""
            className="absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.04] rotate-12"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-background-card p-8 border border-border-dark hover:border-primary/30 transition-all group rounded relative overflow-hidden">
          <div className="flex justify-between items-start mb-6 relative z-10">
            <p className="text-primary/60 text-[10px] font-black uppercase tracking-[0.2em]">Ganhos Brutos</p>
            <TrendingUp className="text-primary/40" />
          </div>
          <p className="text-white tracking-tighter text-3xl lg:text-4xl font-black mb-4 relative z-10">R$ 18.900,00</p>
          <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <TrendingUp size={14} />
            <span>+12.4% vs anterior</span>
          </div>
          <img
            src="Submarca- Marca D_água 3 (branco).png"
            alt=""
            className="absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.04] rotate-12"
          />
        </div>
      </section>

      {/* Goals Card */}
      <section className="bg-background-card border border-border-dark rounded relative overflow-hidden">
        <div className="p-6 border-b border-border-dark flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Target size={18} className="text-primary" />
            <h3 className="text-white text-md font-bold uppercase tracking-widest">Metas Pessoais</h3>
          </div>
          <button
            onClick={() => onNavigate(Page.GOALS)}
            className="text-[10px] text-primary uppercase font-bold tracking-widest hover:underline"
          >
            Ver todas
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_GOALS.slice(0, 4).map((goal) => {
            const progress = Math.round((goal.currentAmount / goal.targetAmount) * 100);
            return (
              <div key={goal.id} className="p-4 bg-white/[0.02] border border-white/5 rounded hover:border-primary/20 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-bold text-sm">{goal.title}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mt-1">{goal.category}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{
                    color: progress >= 75 ? '#10b981' : progress >= 50 ? '#B18846' : '#ef4444',
                  }}>
                    {progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                      backgroundColor: progress >= 75 ? '#10b981' : progress >= 50 ? '#B18846' : '#ef4444',
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-white/30 text-[10px]">
                    R$ {goal.currentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-white/30 text-[10px]">
                    R$ {goal.targetAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <img
          src="Submarca- Marca D_água 1.png"
          alt=""
          className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.03] rotate-12"
        />
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pie Chart */}
        <div className="bg-background-card border border-border-dark p-8 rounded relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-primary text-lg font-bold tracking-[0.1em] uppercase">Gastos por Categoria</h3>
            <MoreVertical size={18} className="text-white/40" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-around">
            <div className="w-full sm:w-1/2 h-[200px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={EXPENSE_CATEGORIES}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {EXPENSE_CATEGORIES.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-1/2 mt-4 sm:mt-0">
               {EXPENSE_CATEGORIES.map((cat) => (
                 <div key={cat.name} className="flex items-center gap-3">
                   <div className="w-2 h-2" style={{ backgroundColor: cat.color }}></div>
                   <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{cat.name} ({cat.value}%)</span>
                 </div>
               ))}
            </div>
          </div>
          <img
            src="Submarca- Marca D_água 1.png"
            alt=""
            className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.03] rotate-12"
          />
        </div>

        {/* Bar Chart */}
        <div className="bg-background-card border border-border-dark p-8 rounded relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-primary text-lg font-bold tracking-[0.1em] uppercase">Receitas vs. Despesas</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary"></div>
                <span className="text-[8px] uppercase tracking-widest text-white/40">Receita</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white/20"></div>
                <span className="text-[8px] uppercase tracking-widest text-white/40">Despesa</span>
              </div>
            </div>
          </div>
          <div className="h-[250px] sm:h-[300px] w-full text-[10px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} barGap={4}>
                <XAxis dataKey="name" stroke="#555" tickLine={false} axisLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#242423', borderColor: '#333332', color: '#fff' }} 
                    itemStyle={{ fontSize: '12px', textTransform: 'uppercase' }}
                    cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="income" fill="#B18846" radius={[2, 2, 0, 0]} barSize={10} />
                <Bar dataKey="expense" fill="#3f3f3f" radius={[2, 2, 0, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <img
            src="Submarca- Marca D_água 3 (branco).png"
            alt=""
            className="absolute -right-6 -bottom-6 w-48 h-48 opacity-[0.03] rotate-12"
          />
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="bg-background-card border border-border-dark rounded">
        <div className="p-6 border-b border-border-dark flex justify-between items-center">
            <h3 className="text-white text-md font-bold uppercase tracking-widest">Transações Recentes</h3>
            <button
                onClick={() => onNavigate(Page.TRANSACTIONS)}
                className="text-[10px] text-primary uppercase font-bold tracking-widest hover:underline"
            >
                Ver todas
            </button>
        </div>

        {/* Mobile: Cards */}
        <div className="md:hidden divide-y divide-white/5">
          {RECENT_TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="p-5 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{tx.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white/40 text-[10px] uppercase font-bold">{tx.category}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-white/40 text-[10px]">{tx.date}</span>
                </div>
              </div>
              <p className={`font-black text-sm tracking-tighter whitespace-nowrap ${tx.type === 'income' ? 'text-emerald-500' : 'text-white'}`}>
                {tx.type === 'expense' ? '- ' : '+ '}
                R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white/40 uppercase text-[9px] tracking-[0.2em] font-black">
                    <tr>
                        <th className="px-8 py-4">Descrição</th>
                        <th className="px-8 py-4">Categoria</th>
                        <th className="px-8 py-4">Data</th>
                        <th className="px-8 py-4 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {RECENT_TRANSACTIONS.map((tx) => (
                        <tr key={tx.id} className="hover:bg-white/5 transition-all group cursor-default">
                             <td className="px-8 py-4 text-white font-medium group-hover:text-primary transition-colors">{tx.description}</td>
                             <td className="px-8 py-4 text-white/50 uppercase text-[10px] font-bold">{tx.category}</td>
                             <td className="px-8 py-4 text-white/50 text-[10px]">{tx.date}</td>
                             <td className={`px-8 py-4 font-black text-right tracking-tighter ${tx.type === 'income' ? 'text-emerald-500' : 'text-white'}`}>
                                {tx.type === 'expense' ? '- ' : '+ '}
                                R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                             </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>
      {/* WhatsApp Widget */}
      {showWhatsApp && (
        <div className="fixed bottom-6 right-6 z-40 w-72 bg-background-card border border-border-dark rounded shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <WhatsAppIcon size={16} className="text-emerald-500" />
              </div>
              <span className="text-white font-bold text-sm">Conecte-se com a IA</span>
            </div>
            <button onClick={() => setShowWhatsApp(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Clique aqui para conversar com a IA e alimentar seus gráficos
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero conectar minha conta Zenor Finance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <WhatsAppIcon size={14} />
              Conectar via WhatsApp
            </a>
          </div>
        </div>
      )}

    </div>
  );
};