import React from 'react';
import { Page } from '../../types';
import { Button } from '../ui/Button';
import { Wallet, ShoppingBag, TrendingUp, MoreVertical, Calendar } from 'lucide-react';
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
import { CHART_DATA, EXPENSE_CATEGORIES, RECENT_TRANSACTIONS } from '../../constants';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 lg:p-12 space-y-12">
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
          <div className="flex items-center gap-2 text-background-dark/80 text-[10px] font-bold uppercase tracking-widest relative z-10">
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
          <div className="flex items-center gap-2 text-primary/60 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <span>5.2% controlado</span>
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
          <div className="flex items-center gap-2 text-primary/60 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <span>+12.4% performance</span>
          </div>
          <img
            src="Submarca- Marca D_água 3 (branco).png"
            alt=""
            className="absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.04] rotate-12"
          />
        </div>
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
    </div>
  );
};