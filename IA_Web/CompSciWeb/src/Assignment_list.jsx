import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Assignment_list.css'

const Assignment_list =() =>{

    const [data, setData] = useState([]);
    const num =1;
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
return<>

<h1 id="header">Assignments</h1>

 <ul id='list'>
                    {data.map(item=> (
                        
                        <button id='items' key={item.Assignment_ID} >{item.Name}-{item.Subject_Name}</button>
                       
                    ))}
                     
    </ul>

</>


}

export default Assignment_list