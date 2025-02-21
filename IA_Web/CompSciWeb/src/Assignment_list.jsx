import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Assignment_list.css'

const Assignment_list =() =>{

    const [data, setData] = useState([]);
    const num =1;
    const [currentAssignment, setCurrentAssignment] = useState(0);
    const [count, setCount] = useState(0);
    const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

   useEffect(() =>{
        axios.get('http://localhost:3001/api/assignment', { params: { Class_ID: num}})
        .then(response => {
            
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setData([]);  // Clear the data if an error occurs
        });
              
      }, []);

      useEffect(() =>{
        async function fetchData() {
            const response = await fetch("http://localhost:3001/api/count");
             setCount(await response.json());
            console.log("Total entries:", count.count);
        }
        fetchData();
              
      }, []);

      const handleClick =(assignmentID)=>{
        setCurrentAssignment(assignmentID);

      }

      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
          setMessage("Please select a file first.");
          return;
        }
    
        const formData = new FormData();
        formData.append(count, currentAssignment, file);
    
        try {
          const response = await axios.post("http://localhost:3001/api/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          setMessage(response.data.message);
        } catch (error) {
          setMessage("Upload failed.");
        }
      };
return<>

<h1 id="header">Assignments</h1>

 <ul id='list'>
                    {data.map(item=> (
                        
                        <button id='items' key={item.Assignment_ID} onClick={handleClick(item.Assignment_ID)}>{item.Name}-{item.Subject_Name}</button>
                       
                    ))}
                     
    </ul>


    <div id="assignment">
    <h2>Upload a PDF</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}

    </div>

</>


}

export default Assignment_list