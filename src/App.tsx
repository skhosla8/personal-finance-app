// Base Imports
import React from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview/components/OverviewMain';
import Transactions from './pages/Transactions/components/TransactionsMain';
import Budgets from './pages/Budgets/components/BudgetsMain';
import Pots from './pages/Pots/components/PotsMain';
import RecurringBills from './pages/RecurringBills/components/RecurringBillsMain';
 
function App() {
  return (
    <div className="app">
      <Sidebar />

      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/budgets' element={<Budgets />} />
        <Route path='/pots' element={<Pots />} />
        <Route path='/recurringBills' element={<RecurringBills />} />
      </Routes>
    </div>
  );
}

export default App;
