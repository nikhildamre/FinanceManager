import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, verify credentials with your backend here
    login({ email });
    navigate('/dashboard');
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: 'linear-gradient(135deg, #74ABE2, #5563DE)' }}
    >
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', animation: 'fadeInUp 0.5s ease' }}>
        <h2 className="mb-4 text-center" style={{ color: '#5563DE' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ transition: 'all 0.3s' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ transition: 'all 0.3s' }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ background: '#5563DE', border: 'none' }}>
            Login
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .card:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
        input:focus {
          box-shadow: 0 0 8px rgba(85, 99, 222, 0.6);
          border-color: #5563DE;
        }
      `}</style>
    </div>
  );
}
