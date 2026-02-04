import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Dashboard } from './components/pages/Dashboard';
import { Transactions } from './components/pages/Transactions';
import { Insights } from './components/pages/Insights';
import { Account, Subscription, Support } from './components/pages/OtherPages';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Full Screen Pages (No Sidebar)
  if (currentPage === Page.LOGIN) {
    return <Login onNavigate={navigateTo} />;
  }

  if (currentPage === Page.REGISTER) {
    return <Register onNavigate={navigateTo} />;
  }

  // Dashboard Layout Pages
  return (
    <Layout currentPage={currentPage} onNavigate={navigateTo}>
      {currentPage === Page.DASHBOARD && <Dashboard onNavigate={navigateTo} />}
      {currentPage === Page.TRANSACTIONS && <Transactions />}
      {currentPage === Page.INSIGHTS && <Insights />}
      {currentPage === Page.ACCOUNT && <Account />}
      {currentPage === Page.SUBSCRIPTION && <Subscription />}
      {currentPage === Page.SUPPORT && <Support />}
    </Layout>
  );
}

export default App;