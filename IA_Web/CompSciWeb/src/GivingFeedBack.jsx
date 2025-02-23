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
      
      };

      if(arr == null){
        arr = [];
      }

     

      const Change = (event) => {
        setValue(event.target.value);
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
    {products.map((item) => (

        <option key={item.id} value={item.name}>{item.name}</option>
    ))
    
    }

<option value="">Select your option</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
    </select>
    {selected && <p className="mt-2">You selected: {selected}</p>}
    <label htmlFor="textbox">Enter text: </label>
    <textarea
            id='textbox'
            type="text"
           
            value={value} 
            onChange={Change} 
            
          />
      </form>
    </div>
   



    </div>
    
    </>
}

export default GivingFeedBack