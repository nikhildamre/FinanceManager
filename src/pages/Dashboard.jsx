// src/pages/Dashboard.jsx
import { useFinance } from '../context/FinanceContext';

export default function Dashboard() {
  const { state } = useFinance();
  
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <div className="alert alert-info">
        Total Transactions: {state.transactions.length}
      </div>
    </div>
  );
}