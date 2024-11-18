import Body from './Body'
import StudentScreen from './StudentScreen'

import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Structure from './Structure.jsx'
import AssginmentScreen from './AssginmentScreen.jsx';


// import Home component


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Structure />}>

      <Route index element={<StudentScreen />}  />

      <Route path="/assignmentscreen" element={<AssginmentScreen />} />
      </Route>
     </Routes>
     </BrowserRouter>
   
    </>
  )
}

export default App
