import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Search, Filter, Calendar, Tag, DollarSign, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { RECENT_TRANSACTIONS } from '../../constants';
import { Transaction } from '../../types';

export const Transactions: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  return (
    <div className="p-6 lg:p-12 space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-white text-3xl font-black leading-tight tracking-tight mb-2">Transações</h2>
          <p className="text-white/40 text-sm">Gerencie seu histórico financeiro com precisão.</p>
        </div>
      </header>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input placeholder="Buscar por descrição..." icon={<Search size={16} />} />
        </div>
        <div className="relative">
             <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
             <select className="w-full h-12 bg-white/[0.02] border border-white/10 rounded pl-12 pr-4 text-white text-sm font-light appearance-none focus:outline-none focus:border-primary">
                 <option value="">Filtrar por Data</option>
                 <option value="7">Últimos 7 dias</option>
                 <option value="30">Últimos 30 dias</option>
                 <option value="90">Últimos 3 meses</option>
             </select>
        </div>
        <div className="relative">
             <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
             <select className="w-full h-12 bg-white/[0.02] border border-white/10 rounded pl-12 pr-4 text-white text-sm font-light appearance-none focus:outline-none focus:border-primary">
                 <option value="">Todas Categorias</option>
                 <option value="Serviços">Serviços</option>
                 <option value="Lazer">Lazer</option>
                 <option value="Investimentos">Investimentos</option>
             </select>
        </div>
      </div>

      <div className="bg-background-card rounded border border-border-dark overflow-hidden">

        {/* Mobile: Cards */}
        <div className="md:hidden divide-y divide-border-dark/50">
          {[...RECENT_TRANSACTIONS, ...RECENT_TRANSACTIONS].map((tx, i) => (
            <div
              key={`${tx.id}-${i}`}
              onClick={() => setSelectedTransaction(tx)}
              className="p-5 active:bg-white/[0.02] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-white font-bold text-sm truncate flex-1 mr-3">{tx.description}</p>
                <p className={`font-black text-sm tracking-tighter whitespace-nowrap ${tx.type === 'income' ? 'text-emerald-500' : 'text-red-400'}`}>
                  {tx.type === 'income' ? '+' : '-'} R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${
                    tx.status === 'completed' ? 'text-emerald-500' : 'text-amber-500'
                }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                        tx.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}></span>
                    {tx.status === 'completed' ? 'Efetivado' : 'Pendente'}
                </span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px] font-medium">{tx.date}</span>
                <span className="text-white/20">·</span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/60 text-[10px] font-bold uppercase">
                    {tx.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/40 uppercase text-[10px] tracking-[0.15em] font-black border-b border-border-dark">
              <tr>
                <th className="px-8 py-5">Status</th>
                <th className="px-6 py-5">Data</th>
                <th className="px-6 py-5">Descrição</th>
                <th className="px-6 py-5">Categoria</th>
                <th className="px-8 py-5 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark/50">
              {RECENT_TRANSACTIONS.map((tx) => (
                <tr
                  key={tx.id}
                  onClick={() => setSelectedTransaction(tx)}
                  className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                        tx.status === 'completed' ? 'text-emerald-500' : 'text-amber-500'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            tx.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}></span>
                        {tx.status === 'completed' ? 'Efetivado' : 'Pendente'}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-white/40 font-medium">{tx.date}</td>
                  <td className="px-6 py-6 text-white font-bold group-hover:text-primary transition-colors">{tx.description}</td>
                  <td className="px-6 py-6">
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white/60 text-[10px] font-bold uppercase">
                        {tx.category}
                    </span>
                  </td>
                  <td className={`px-8 py-6 font-black text-right text-base ${tx.type === 'income' ? 'text-emerald-500' : 'text-red-400'}`}>
                    {tx.type === 'income' ? '+' : '-'} R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
              {/* Duplicated for visuals */}
              {RECENT_TRANSACTIONS.map((tx) => (
                <tr
                  key={`${tx.id}-dup`}
                  onClick={() => setSelectedTransaction(tx)}
                  className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                        tx.status === 'completed' ? 'text-emerald-500' : 'text-amber-500'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            tx.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}></span>
                        {tx.status === 'completed' ? 'Efetivado' : 'Pendente'}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-white/40 font-medium">{tx.date}</td>
                  <td className="px-6 py-6 text-white font-bold group-hover:text-primary transition-colors">{tx.description}</td>
                  <td className="px-6 py-6">
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white/60 text-[10px] font-bold uppercase">
                        {tx.category}
                    </span>
                  </td>
                  <td className={`px-8 py-6 font-black text-right text-base ${tx.type === 'income' ? 'text-emerald-500' : 'text-red-400'}`}>
                    {tx.type === 'income' ? '+' : '-'} R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-border-dark bg-white/[0.01]">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold hidden sm:inline">Mostrando 1-10 de 45</span>
            <div className="flex gap-2 mx-auto sm:mx-0">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5 disabled:opacity-50">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-background-dark font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/40 hover:bg-white/5">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      <Modal 
        isOpen={!!selectedTransaction} 
        onClose={() => setSelectedTransaction(null)}
        title="Detalhes da Transação"
      >
        {selectedTransaction && (
          <div className="space-y-8">
            <div className="text-center py-4 border-b border-border-dark">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Valor Total</p>
                <h2 className={`text-4xl font-black tracking-tight ${selectedTransaction.type === 'income' ? 'text-emerald-500' : 'text-white'}`}>
                    {selectedTransaction.type === 'income' ? '+' : '-'} R$ {selectedTransaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary mb-1">
                        <Tag size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Descrição</span>
                    </div>
                    <p className="text-white font-medium">{selectedTransaction.description}</p>
                </div>
                
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary mb-1">
                        <Calendar size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Data</span>
                    </div>
                    <p className="text-white font-medium">{selectedTransaction.date}</p>
                </div>

                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary mb-1">
                        <DollarSign size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Categoria</span>
                    </div>
                    <p className="text-white font-medium">{selectedTransaction.category}</p>
                </div>

                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary mb-1">
                        <Activity size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Status</span>
                    </div>
                    <span className={`inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold ${selectedTransaction.status === 'completed' ? 'text-emerald-500' : 'text-amber-500'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedTransaction.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        {selectedTransaction.status === 'completed' ? 'Efetivado' : 'Pendente'}
                    </span>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <Button fullWidth onClick={() => setSelectedTransaction(null)}>Fechar</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};