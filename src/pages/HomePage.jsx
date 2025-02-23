import { Link } from 'react-router-dom';
import { FaChartLine, FaWallet, FaLock, FaUserShield } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
      
      {/* Header */}
      <header className="py-3 bg-white shadow-sm text-center">
        <h1 className="fw-bold" style={{ color: '#f5576c' }}>Finance Manager</h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3">
        
        {/* Intro Section */}
        <div className="mb-5">
          <h1 className="display-4 text-white mb-3">Take Control of Your Finances</h1>
          <p className="lead text-white">Track, save, and grow your wealth with ease.</p>
        </div>

        {/* Features Section */}
        <div className="row text-white text-center mb-5">
          <div className="col-md-3 mb-4">
            <FaChartLine size={50} className="mb-3" />
            <h5>Smart Analytics</h5>
            <p>Gain insights into your expenses and income.</p>
          </div>
          <div className="col-md-3 mb-4">
            <FaWallet size={50} className="mb-3" />
            <h5>Budget Planning</h5>
            <p>Set financial goals and stick to them.</p>
          </div>
          <div className="col-md-3 mb-4">
            <FaLock size={50} className="mb-3" />
            <h5>Secure & Private</h5>
            <p>Your data is encrypted and safe with us.</p>
          </div>
          <div className="col-md-3 mb-4">
            <FaUserShield size={50} className="mb-3" />
            <h5>24/7 Support</h5>
            <p>We are here to help anytime you need.</p>
          </div>
        </div>

        {/* Card Section */}
        <div className="card p-5 shadow-lg" style={{ maxWidth: '400px', borderRadius: '15px', animation: 'slideInUp 0.5s ease' }}>
          <h2 className="mb-4 text-center" style={{ color: '#f5576c' }}>Get Started</h2>
          <div className="d-grid gap-3">
            <Link to="/login" className="btn btn-primary btn-lg" style={{ borderRadius: '50px', transition: 'transform 0.3s ease' }}>
              Login
            </Link>
            <Link to="/signup" className="btn btn-success btn-lg" style={{ borderRadius: '50px', transition: 'transform 0.3s ease' }}>
              Create New Account
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 text-center bg-white shadow-sm">
        <p className="mb-0">© {new Date().getFullYear()} Finance Manager. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }
        .btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
