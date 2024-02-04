import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Login from './components/Login';
import AddBook from './components/AddBook';
import Registration from './components/Registration';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType('');
  };

  const handleRegister = (username) => {
    console.log(`Registered user: ${username}`);
  };

  return (
    <Router>
      <div>
        <NavBar loggedIn={loggedIn} userType={userType} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<BookList userType={userType} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/registration" element={<Registration onRegister={handleRegister} />} />
          {userType === 'teacher' && <Route path="/add-book" element={<AddBook />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
