import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.username === username && userData.password === password) {
      onLogin(username);
      navigate('/');
    } else {
      alert('User not registered. Redirecting to Registration page.');
      navigate('/registration'); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-gray-300 shadow-md rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="block">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded p-2 w-full mt-2"
          />
        </label>
        <label className="block mt-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2 w-full mt-2"
          />
        </label>
        <div className="flex items-center justify-between mt-6">
          <button onClick={handleLogin} disabled={!username || !password} className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
          <button onClick={() => navigate('/registration')} className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
