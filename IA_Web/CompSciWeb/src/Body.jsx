import React, { useState} from 'react';
import axios from '../node_modules/axios';

import StudentScreen from './StudentScreen';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Body.css';


function Body(){


    
    const [data, setData] = useState([]);
    const [inputQuery, setInputQuery] = useState('');

    const handleSearch = () => {
        if (inputQuery) {
            axios.get('http://localhost:3001/api/search', { params: { query: inputQuery } })
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setData([]);  // Clear the data if an error occurs
                });
        }


    };
    

  
   
  
    return (

       
       
              <div id='Plane'>
                
                <h1>Data from SQLite</h1>
             <input 
                 type="text" 
                 value={inputQuery} 
                 onChange={e => setInputQuery(e.target.value)} 
                 placeholder="Enter search term"
             />
              <button onClick={handleSearch}>Add Data</button>
             

              
              <ul>
                {data.length > 0 ? (
                    data.map(item => (
                        <li key={item.id}>{item.data}</li>
                    ))
                ) : (
                    <p>No matching data found.</p>
                )}
            </ul>


            
          
            </div>
       
    );

}



export default Body