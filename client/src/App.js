import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Dashboard></Dashboard>}></Route>      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
