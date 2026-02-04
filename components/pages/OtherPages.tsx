import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { MOCK_USER } from '../../constants';
import { User, Lock, Save, CreditCard, CheckCircle, Smartphone, Mail, Phone, FileText } from 'lucide-react';

export const Account: React.FC = () => {
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    return (
        <div className="p-6 lg:p-12 max-w-4xl mx-auto space-y-8">
            <header>
                <h2 className="text-white text-4xl font-bold tracking-tight">Minha Conta</h2>
                <p className="text-white/40 text-base mt-2">Gerencie suas informações de conexão e segurança.</p>
            </header>

            {/* Module 1: WhatsApp */}
            <section className="bg-background-card border border-border-dark p-8 rounded relative overflow-hidden">
                <img 
                    src="Submarca- Marca D_água 2 (preto).png"
                    className="absolute -right-10 -top-10 w-48 h-48 opacity-5 rotate-12"
                    alt=""
                />
                <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-emerald-500/10 rounded border border-emerald-500/20 text-emerald-500">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Conexão WhatsApp</h3>
                        <p className="text-white/60 text-sm mt-1 max-w-lg">
                            Vincule seu número para receber relatórios diários e alertas de segurança. Esta conta está vinculada ao número abaixo.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-end relative z-10">
                    <Input label="Número do WhatsApp" defaultValue="(11) 99999-9999" />
                    <Button variant="outline" className="mb-[2px]">Verificar e Salvar</Button>
                </div>
            </section>

            {/* Module 2: Personal Data */}
            <section className="bg-background-card border border-border-dark p-8 rounded space-y-6">
                 <div className="flex items-center gap-3 mb-2">
                    <User className="text-primary" size={20} />
                    <h3 className="text-lg font-bold text-white">Dados Pessoais</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Nome Completo" defaultValue={MOCK_USER.name} />
                    <Input label="E-mail" defaultValue={MOCK_USER.email} disabled className="opacity-50 cursor-not-allowed" />
                 </div>
                 <div className="flex justify-end pt-2">
                    <Button icon={<Save size={16} />}>Salvar Alterações</Button>
                 </div>
            </section>

            {/* Change Password Button */}
            <div className="flex justify-center pt-8 border-t border-white/5">
                <Button variant="secondary" onClick={() => setIsPasswordModalOpen(true)} icon={<Lock size={16} />}>
                    Alterar Senha de Acesso
                </Button>
            </div>

            {/* Change Password Modal */}
            <Modal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                title="Alterar Senha"
            >
                <div className="space-y-6">
                    <p className="text-white/60 text-sm">
                        Para sua segurança, preencha sua senha atual antes de definir uma nova.
                    </p>
                    <Input label="Senha Atual" type="password" placeholder="••••••••" />
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <Input label="Nova Senha" type="password" placeholder="••••••••" />
                        <Input label="Confirmar Nova Senha" type="password" placeholder="••••••••" />
                    </div>
                    {/* Buttons Reordered: Cancel Left, Confirm Right */}
                    <div className="pt-6 flex gap-3">
                        <Button fullWidth variant="ghost" onClick={() => setIsPasswordModalOpen(false)}>Cancelar</Button>
                        <Button fullWidth onClick={() => setIsPasswordModalOpen(false)}>Confirmar Alteração</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const Subscription: React.FC = () => {
    return (
        <div className="p-6 lg:p-12 space-y-12 max-w-5xl mx-auto">
            <header className="mb-12">
                <h2 className="text-3xl font-light text-white mb-2 tracking-tight">Gestão de <span className="font-bold text-primary">Assinatura</span></h2>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="text-white/40 text-sm max-w-2xl leading-relaxed">Detalhes do seu plano atual e histórico.</p>
            </header>

            <section className="bg-background-card border border-border-dark p-8 relative overflow-hidden rounded">
                <img 
                    src="Submarca- Marca D_água 2 (preto).png"
                    className="absolute -right-16 -top-16 w-80 h-80 opacity-5 rotate-12"
                    alt=""
                />
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 border border-primary flex items-center justify-center text-primary rounded">
                            <CreditCard size={32} />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h4 className="text-2xl font-bold text-white tracking-tight">Zenor Premium</h4>
                                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest border border-primary/30 rounded">Ativo</span>
                            </div>
                            <p className="text-primary font-medium text-lg mt-1">R$ 49,90<span className="text-white/40 text-sm font-normal">/mês</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button>Gerenciar Plano</Button>
                        <Button variant="outline">Cancelar</Button>
                    </div>
                </div>
            </section>
            
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
                        <CheckCircle className="text-primary" size={16} /> Benefícios Ativos
                    </h3>
                    <div className="space-y-3">
                        {['Insights de IA Ilimitados', 'Suporte Prioritário 24/7', 'Multi-contas Bancárias', 'Exportação Avançada'].map((item) => (
                            <div key={item} className="flex items-center gap-3 p-4 border border-border-dark bg-white/[0.02] rounded">
                                <CheckCircle className="text-primary" size={18} />
                                <span className="text-sm text-white/80">{item}</span>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
                        <FileText className="text-primary" size={16} /> Histórico de Pagamentos
                    </h3>
                    <div className="bg-background-card border border-border-dark rounded overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-white/40 uppercase text-[9px] font-bold">
                                <tr>
                                    <th className="px-4 py-3">Data</th>
                                    <th className="px-4 py-3">Valor</th>
                                    <th className="px-4 py-3 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { date: '01 Out 2023', amount: '49,90', status: 'Pago' },
                                    { date: '01 Set 2023', amount: '49,90', status: 'Pago' },
                                    { date: '01 Ago 2023', amount: '49,90', status: 'Pago' },
                                ].map((row, i) => (
                                    <tr key={i} className="text-white/70">
                                        <td className="px-4 py-3 text-[11px]">{row.date}</td>
                                        <td className="px-4 py-3 text-[11px]">R$ {row.amount}</td>
                                        <td className="px-4 py-3 text-right">
                                            <span className="text-emerald-500 text-[10px] uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded">{row.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export const Support: React.FC = () => {
    return (
        <div className="p-6 lg:p-12 max-w-5xl mx-auto space-y-12">
            <header className="mb-12 text-center">
                <h2 className="text-3xl font-light text-white mb-2 tracking-tight">Suporte ao <span className="font-bold text-primary">Cliente</span></h2>
                <p className="text-white/40 text-sm">Estamos aqui para garantir sua experiência impecável.</p>
            </header>

            <div className="bg-gradient-to-br from-primary to-[#8a6834] rounded p-12 text-center relative overflow-hidden shadow-2xl">
                 <div className="relative z-10 flex flex-col items-center">
                    <Smartphone className="text-background-dark w-16 h-16 mb-6" />
                    <h3 className="text-background-dark text-3xl font-bold mb-4 font-display">Fale com nosso consultor</h3>
                    <p className="text-background-dark/80 text-lg mb-8 max-w-xl font-medium">
                        Equipe especializada pronta para auxiliar no seu planejamento financeiro de luxo.
                    </p>
                    <button className="bg-background-dark text-white hover:bg-black px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all shadow-xl flex items-center gap-3">
                        INICIAR ATENDIMENTO VIA WHATSAPP
                    </button>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                 <div className="bg-background-card border border-border-dark p-6 flex items-center gap-4 rounded">
                     <Mail className="text-primary" />
                     <div>
                         <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">E-mail</p>
                         <p className="text-white">suporte@zenor.finance</p>
                     </div>
                 </div>
                 <div className="bg-background-card border border-border-dark p-6 flex items-center gap-4 rounded">
                     <Phone className="text-primary" />
                     <div>
                         <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Telefone</p>
                         <p className="text-white">0800 700 1234</p>
                     </div>
                 </div>
            </div>
        </div>
    );
};