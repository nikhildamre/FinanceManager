import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <nav className="nav flex-column">
        <Link className="nav-link text-white" to="/">Dashboard</Link>
        <Link className="nav-link text-white" to="/transactions">Transactions</Link>
        <Link className="nav-link text-white" to="/budgets">Budgets</Link>
        <Link className="nav-link text-white" to="/reports">Reports</Link>
        <Link className="nav-link text-white" to="/settings">Settings</Link>
      </nav>
    </div>
  );
}