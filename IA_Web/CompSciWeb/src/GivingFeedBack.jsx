import React from "react";
import './GivingFeedBack.css'
import { useState } from "react";
import { variables } from "./VariableManager.js";


const GivingFeedBack =() =>{

    const [selected, setSelected] = useState("");

    const handleChange = (event) => {
      setSelected(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      
      };

      const test =() =>{
       variables.currentUser = variables.currentUser + 1;
        console.log(variables.currentUser); 


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
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
    </select>
    {selected && <p className="mt-2">You selected: {selected}</p>}
      </form>
    </div>



      <button onClick={test}>
        hello
      </button>

    </div>
    
    </>
}

export default GivingFeedBack