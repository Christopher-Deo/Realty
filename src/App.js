import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//importing pages
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Offer from './pages/Offer';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import Register from './pages/Register';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register/>} />
        </Routes>     
      </Router>
    </>
  );
}

export default App;
