

import React from 'react';
import TeacherScreen from './TeacherScreen.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Structure from './Structure.jsx'
import AssginmentScreen from './AssginmentScreen.jsx';
import LogIn from './LogIn.jsx';
import Nothing from './nothing.jsx';
import { DataProvider } from "./DataContext";

// import Home component


function App() {
  

  return (
    <>
   
    
    <DataProvider>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Nothing/>}>

      <Route index element={<TeacherScreen />}  />
      
      
      
      </Route>
      <Route path="/index" element={<Structure/>} >
      <Route index element={<AssginmentScreen />} />
      </Route>
     </Routes>
     </BrowserRouter>
     
     </DataProvider>
     
     

    

     
    </>
  )
}

export default App
