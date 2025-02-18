import Body from './Body'
import StudentScreen from './StudentScreen'

import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Structure from './Structure.jsx'
import AssginmentScreen from './AssginmentScreen.jsx';
import LogIn from './LogIn.jsx';
import Nothing from './nothing.jsx';

// import Home component


function App() {
  localStorage.setItem("username", 1)

  return (
    <>
    {
    /*
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Nothing/>}>

      <Route index element={<LogIn />}  />
      
      
      
      </Route>
      <Route path="/index" element={<Structure/>} >
      <Route index element={<AssginmentScreen />} />
      </Route>
     </Routes>
     </BrowserRouter>
     */
     }

    <AssginmentScreen />

     
    </>
  )
}

export default App
