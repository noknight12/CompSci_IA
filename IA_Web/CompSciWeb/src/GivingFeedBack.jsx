import React, { useState, useEffect, useContext } from 'react'
import './GivingFeedBack.css'
import axios from 'axios'

import { DataContext } from "./DataContext";

const GivingFeedBack =() =>{

    const [selected, setSelected] = useState("");
 const {classes, setClasses} = useContext(DataContext); //classes

     const num =1;
     const [value, setValue] = useState('');
     const [error, setError] = useState("");
   
   
    let arr = [];
   
    const handleChange = (event) => {
      setSelected(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      
        setError(""); // Clear previous errors
    
        // checks if a class has been selected
        if (selected == "") {
          setError("no class selected");
          return;
        }
    
        // Simulate API call
     
      };

     

      const Change = (event) => {
        setValue(event.target.value);
      }

      const handleFeedBack =()=>{
        
        axios.post('http://localhost:3001/api/feedBack', { 
          Class_ID: selected, 
          Content: value 
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          
      });

      }
    return<>
 <div id="parent">
    <div id="feedBack">
      <form  onSubmit={handleSubmit}>
      <label  htmlFor="cars">Choose a car:</label>

    <select 
    name="cars" 
    id="cars"
    onChange={handleChange}
    
    >
      <option value="">Select your option</option>
    {classes.map((item) => (

        <option key={item.id} value={item.id}>{item.name}</option>
    ))
    
    }

<option value="">Select your option</option>

    </select>
    {error && <p>{error}</p>}
    {selected && <p className="mt-2">You selected: {selected}</p>}
    <label htmlFor="textbox">Enter text: </label>
    <textarea
            id='textbox'
            type="text"
           
            value={value} 
            onChange={Change} 
            
          />

          <button id="hi"type="submit" onClick={handleFeedBack}>
          submit
        </button>
      </form>
    </div>
   



    </div>
    
    </>
}

export default GivingFeedBack