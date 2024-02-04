import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [digitChecked, setDigitChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);
  const [lengthChecked, setLengthChecked] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (value) => {
    setPassword(value);
    setUppercaseChecked(/[A-Z]/.test(value));
    setDigitChecked(/\d/.test(value));
    setSymbolChecked(/[@$!%*?&]/.test(value));
    setLengthChecked(value.length > 6);
  };

  const handleUsernameChange = (value) => {
    setValidUsername(value.length > 6 && !/\s/.test(value));
    setUsername(value);
  };

  const handleRegister = () => {
    if (!validUsername || !password) {
      alert('Please enter a valid username and password.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must meet the requirements.');
      return;
    }

    onRegister(username);

    const userData = { username, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-gray-300 shadow-md rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        <label className="block">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
            className={`border rounded p-2 w-full mt-2 ${validUsername ? 'border-green-500' : 'border-red-500'}`}
          />
          {!validUsername && <p className="text-red-500 text-sm mt-1">Username should be more than 6 characters </p>}
          {!validUsername && <p className="text-red-500 text-sm mt-1">should not contain spaces.</p>}
        </label>
        <label className="block mt-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className={`border rounded p-2 w-full mt-2 ${lengthChecked && digitChecked && symbolChecked && uppercaseChecked ? 'border-green-500' : 'border-red-500'}`}
          />
          <div className="text-sm mt-1">
            <p>Password must contain:</p>
            <ul className="flex flex-col space-y-2">
              <li className={`${lengthChecked ? 'text-green-500' : 'text-red-500'}`}>At least 6 characters</li>
              <li className={`${digitChecked ? 'text-green-500' : 'text-red-500'}`}>At least one digit</li>
              <li className={`${symbolChecked ? 'text-green-500' : 'text-red-500'}`}>At least one symbol (@$!%*?&)</li>
              <li className={`${uppercaseChecked ? 'text-green-500' : 'text-red-500'}`}>At least one uppercase letter</li>
            </ul>
          </div>
        </label>
        <div className="flex items-center justify-between mt-6">
          <button onClick={handleRegister} disabled={!validUsername || !password} className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
