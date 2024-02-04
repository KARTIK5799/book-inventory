import { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ loggedIn, userType, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white flex items-center space-x-2">
            <span className="text-lg font-bold uppercase">Book</span>
            <span className="text-lg text-blue-500 font-bold uppercase">Show</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-grow">
          <div className="relative flex-grow">
          <div className="flex items-center justify-center relative">
  <input
    type="text"
    placeholder="Search"
    className="p-1 pl-8 border border-gray-300 rounded w-96"
  />
 
</div>

          </div>

          {!loggedIn ? (
            <Link to="/login" className="text-white bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          ) : (
            <>
              <span className="text-white">Welcome, {userType}</span>
              <button onClick={onLogout} className="text-white bg-red-500 px-4 py-2 rounded">
                Logout
              </button>
              {userType === 'teacher' && (
                <Link to="/add-book" className="text-white bg-green-500 px-4 py-2 rounded">
                  Add Book
                </Link>
              )}
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

   
{/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-gray-800 p-4 text-center">
    {loggedIn ? (
      <>
        <div className="text-white mb-2">Welcome, {userType}</div>
        <div className="mb-2">
          <button
            onClick={onLogout}
            className="text-white bg-red-500 px-4 py-2 rounded mx-2"
          >
            Logout
          </button>
          {userType === 'teacher' && (
            <Link to="/add-book" className="text-white bg-green-500 px-4 py-2 rounded mx-2">
              Add Book
            </Link>
          )}
        </div>
      </>
    ) : (
      <Link to="/login" className="text-white bg-blue-500 px-4 py-2 rounded">
        Login
      </Link>
    )}
  </div>
)}

    </nav>
  );
};

export default NavBar;
