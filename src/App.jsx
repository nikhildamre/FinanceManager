import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FinanceProvider } from './context/FinanceContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import './assets/styles/global.css';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <FinanceProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <div className="main-content">
                    <Sidebar />
                    <div className="page-content">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }/>
            
            {/* Add similar protected routes for other pages */}
            <Route path="/transactions" element={
              <ProtectedRoute>
                <div className="app-container">
                  <Navbar />
                  <div className="main-content">
                    <Sidebar />
                    <div className="page-content">
                      <Transactions />
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }/>
            
            {/* Repeat for Budgets, Reports, Settings */}
            
          </Routes>
        </Router>
      </FinanceProvider>
    </AuthProvider>
  );
}