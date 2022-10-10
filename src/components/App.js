import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import React, { Component }  from 'react';

import Header from './Header.js';
import Welcome from "./pages/Welcome";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;