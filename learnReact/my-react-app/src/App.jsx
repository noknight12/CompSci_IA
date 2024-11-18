import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout.jsx';

import Header from './Header.jsx';
// import Home component
import Home from './Home.jsx';
// import About component
import About from './About.jsx';
// import ContactUs component
import ContactUs from './ContactUs.jsx';

import NoPage from './NoPage.jsx';


function App(){

    return(<>
      <Header/>
    </>
       
    );
    }
    
    export default App