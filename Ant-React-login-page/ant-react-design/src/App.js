import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginDemo from './LoginDemo'
import useToken from './useToken'
import Dashboard from './Dashboard'
import Homepage from './Homepage'

function App() {
  const [token, setToken] = useToken();

  if(!token) {

    return <LoginDemo setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 