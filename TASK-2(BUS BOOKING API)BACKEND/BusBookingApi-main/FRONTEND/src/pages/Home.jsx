
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth');
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Welcome to DesiRide</h1>
        <p className="home-subtitle">Your trusted bus booking platform</p>
        <button className="home-login-btn" onClick={handleLoginClick}>
          Login to Book a Bus
        </button>
      </div>
    </div>
  );
}
