import React, { useState, useEffect } from 'react'
import './GivingFeedBack.css'
import variables from "./VariableManager";
import Classes from "./Classes";
import axios from 'axios'

const GivingFeedBack =() =>{

    const [selected, setSelected] = useState("");
 const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
     const num =1;
     const [value, setValue] = useState('');
     const [error, setError] = useState("");
    useEffect(() =>{
        axios.get('http://localhost:3001/api/class', { params: { Student_ID: num}})
        
        .then(response => {
           
            
            
           setProducts(response.data);
     
         console.log(products)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setSelectedProductId([]);  // Clear the data if an error occurs
        });


              
      }, []);
   
    let arr = [];
   
    const handleChange = (event) => {
      setSelected(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      
        setError(""); // Clear previous errors
    
        // Basic validation
        if (selected == "") {
          setError("no class selected");
          return;
        }
    
        // Simulate API call
        console.log("Logging in with:", { email, password });
        alert("Login successful!");
      };

      if(arr == null){
        arr = [];
      }

     

      const Change = (event) => {
        setValue(event.target.value);
      }

      const handleFeedBack =()=>{
        
      }
    return<>
 <div id="parent">
    <div id="feedBack">
      <form  onSubmit={handleSubmit}>
      <label for="cars">Choose a car:</label>

    <select 
    name="cars" 
    id="cars"
    onChange={handleChange}
    
    >
      <option value="">Select your option</option>
    {products.map((item) => (

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