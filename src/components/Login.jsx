import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../style/Login.scss';

function Login() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleLogin = () => {
    // Perform login authentication here
    // For simplicity, let's assume login is successful
    navigate('/home'); // Navigate to the Home page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login' type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
