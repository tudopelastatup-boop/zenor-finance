export enum Page {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  DASHBOARD = 'DASHBOARD',
  TRANSACTIONS = 'TRANSACTIONS',
  INSIGHTS = 'INSIGHTS',
  SUBSCRIPTION = 'SUBSCRIPTION',
  ACCOUNT = 'ACCOUNT',
  SUPPORT = 'SUPPORT'
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  plan: 'Premium' | 'Standard';
  memberSince: string;
}

export interface Transaction {
  id: string;
  description: string;
  category: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
  status: 'completed' | 'pending';
}

export interface Insight {
  id: string;
  type: 'opportunity' | 'warning' | 'tip';
  date: string;
  title: string;
  description: string;
  action: string;
}