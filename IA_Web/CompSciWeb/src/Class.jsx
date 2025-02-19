import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Class =() =>{

 const [data, setData] = useState([]);
 const num =  localStorage.getItem("currentClass")
    const getPosts=() =>{
        axios.get('http://localhost:3001/api/posts', { params: { Class_ID: num}})
        .then(response => {
            
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setData([]);  // Clear the data if an error occurs
        });
              
      };

    return<>
    


    {data.map(item=> (
                        
         <button id='items' key={item.Post_ID} >{item.content}</button>
        ))}


    
    </>


}
export default Class