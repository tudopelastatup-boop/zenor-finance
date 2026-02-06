import { Goal, Insight, Transaction, User } from "./types";

export const MOCK_USER: User = {
  name: "Alexandre Zenor",
  email: "alexandre@zenor.finance",
  avatar: "https://picsum.photos/seed/zenoruser/200/200",
  plan: "Premium",
  memberSince: "Outubro de 2023"
};

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    description: "Venda de Projeto UX",
    category: "Serviços",
    date: "15 Out, 2023",
    amount: 12500.00,
    type: "income",
    status: "completed"
  },
  {
    id: "2",
    description: "Apple Store - MacBook M3",
    category: "Equipamentos",
    date: "12 Out, 2023",
    amount: 18999.00,
    type: "expense",
    status: "completed"
  },
  {
    id: "3",
    description: "Aluguel Escritório Corporate",
    category: "Imobiliário",
    date: "10 Out, 2023",
    amount: 4500.00,
    type: "expense",
    status: "pending"
  },
  {
    id: "4",
    description: "Dividendos - ZENR3",
    category: "Investimentos",
    date: "08 Out, 2023",
    amount: 2450.00,
    type: "income",
    status: "completed"
  },
  {
    id: "5",
    description: "Jantar de Negócios - Fasano",
    category: "Lazer",
    date: "05 Out, 2023",
    amount: 850.00,
    type: "expense",
    status: "completed"
  }
];

export const MOCK_INSIGHTS: Insight[] = [
  {
    id: "1",
    type: "opportunity",
    date: "12 Out, 2023",
    title: "Otimização de Gastos em Assinaturas",
    description: "Identificamos que você possui 3 serviços de streaming com conteúdo duplicado. Ao cancelar o plano familiar não utilizado, você pode economizar até R$ 1.200,00 por ano.",
    action: "Aplicar Sugestão"
  },
  {
    id: "2",
    type: "warning",
    date: "08 Out, 2023",
    title: "Aumento Atípico em Lazer",
    description: "Seus gastos na categoria 'Lazer' este mês já atingiram 85% do orçamento previsto, sendo que ainda restam 22 dias no ciclo.",
    action: "Ver Detalhes"
  }
];

export const CHART_DATA = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Fev', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Abr', income: 2780, expense: 3908 },
  { name: 'Mai', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

export const MOCK_GOALS: Goal[] = [
  {
    id: '1',
    title: 'Reserva de Emergência',
    targetAmount: 50000,
    currentAmount: 32500,
    deadline: 'Dez 2024',
    category: 'Segurança',
  },
  {
    id: '2',
    title: 'Viagem Europa',
    targetAmount: 25000,
    currentAmount: 18750,
    deadline: 'Jun 2024',
    category: 'Lazer',
  },
  {
    id: '3',
    title: 'Entrada Apartamento',
    targetAmount: 200000,
    currentAmount: 85000,
    deadline: 'Dez 2025',
    category: 'Imobiliário',
  },
  {
    id: '4',
    title: 'Fundo de Investimentos',
    targetAmount: 100000,
    currentAmount: 47000,
    deadline: 'Mar 2025',
    category: 'Investimentos',
  },
];

export const EXPENSE_CATEGORIES = [
  { name: 'Moradia', value: 45, color: '#B18846' },
  { name: 'Alimentação', value: 25, color: '#3f3f3f' },
  { name: 'Lazer', value: 20, color: '#71717a' },
  { name: 'Outros', value: 10, color: '#27272a' },
];