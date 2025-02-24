import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './Assignment_list.css'
import variables from './VariableManager'
import { DataContext } from "./DataContext";

const Assignment_list =() =>{

    const {assignments, setAssignments} = useContext(DataContext); 
   
    const [currentAssignment, setCurrentAssignment] = useState(0);
    const [count, setCount] = useState(0);
    const [file, setFile] = useState(null);
   

    
    

      const handleClick =(assignmentID)=>{
        setCurrentAssignment(assignmentID);
        const paragraph = document.getElementById("list");
        const classData = document.getElementById("assignment");
        paragraph.style.display = 'none';
        classData.style.display = 'block';
      }

      function handleFileChange(event) {
        setFile(event.target.files[0]);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        getCount();
    
        if (!file) {
          alert("Please select a file");
          return;
        }
    
        const formData = new FormData();
        formData.append("fileData", file);
        formData.append("assignmentID", currentAssignment);
       
        console.log(formData.get("assignmentID"));
    
        axios.post("http://localhost:3001/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(response => alert(response.data.message))
        .catch(error => console.error("Error uploading file:", error));
      }
      
return<>

<h1 id="header">Assignments</h1>

 <ul id='list'>

      {assignments.map(item=> (
                        
        <button id='items' key={item.Assignment_ID} onClick={() => handleClick(item.Assignment_ID)}>{item.Name}-{item.Subject_Name}</button>
                       
         ))}
                     
    </ul>

    <div id="assignment">
 <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button type="submit">Upload</button>
    </form>

    </div>


   

</>


}

export default Assignment_list