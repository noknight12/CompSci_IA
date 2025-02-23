import React from "react";
import './GivingFeedBack.css'
import { useState } from "react";

const GivingFeedBack =() =>{

    const [selected, setSelected] = useState("");

    const handleChange = (event) => {
      setSelected(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      
      };

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





    </div>
    
    </>
}

export default GivingFeedBack