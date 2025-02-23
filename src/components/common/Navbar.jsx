import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Finance Manager</span>
        {user && (
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}