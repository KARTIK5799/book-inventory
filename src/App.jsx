import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import Registration from "./components/Registration";
import Joyride from "react-joyride";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [runJoyride, setRunJoyride] = useState(false);

  useEffect(() => {
    const joyrideCompleted = localStorage.getItem("joyrideCompleted");
    if (!joyrideCompleted) {
      setRunJoyride(true);
    }
  }, []);

  const handleLogin = (type) => {
    setLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType("");
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      localStorage.setItem("joyrideCompleted", "true");
      setRunJoyride(false);
    }
  };

  const joyrideSteps = [
    {
      target: ".search",
      content:
        "This is the search. You can search through the application using the links here.",
    },
    {
      target: ".login",
      content:
        "This is the login. You can login through the application using the links here.",
    },
    {
      target: ".list-books",
      content: "this is list of books.",
    },
    {
      target: ".next",
      content: "You can check previous books",
    },
    {
      target: ".prev",
      content: "You can check previous books",
    },
  ];

  return (
    <Router>
      <div>
        <NavBar
          loggedIn={loggedIn}
          userType={userType}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<BookList userType={userType} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/registration" element={<Registration />} />
          {userType === "teacher" && (
            <Route path="/add-book" element={<AddBook />} />
          )}
        </Routes>

        <Joyride
          continuous
          run={runJoyride}
          steps={joyrideSteps}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              overlayColor: "rgba(0, 0, 0, 0.5)",
              fontFamily: "Arial, sans-serif",
            },
            buttonClose: {
              color: "#ffffff",
              backgroundColor: "#333333",
              borderRadius: "30px",
            },
            buttonBack: {
              color: "#ffffff",
              backgroundColor: "#333333",
            },
            buttonNext: {
              color: "#ffffff",
              backgroundColor: "blue",
            },
          
          }}
        />
      </div>
    </Router>
  );
};

export default App;
