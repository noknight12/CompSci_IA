import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Classes.css'

const Classes =() =>{

    const [data, setData] = useState([]);
    const num =1;
   useEffect(() =>{
        axios.get('http://localhost:3001/api/class', { params: { Student_ID: num}})
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

<button >hi</button>

 <ul id='bob'>
                    {data.map(item=> (
                        
                        <button id='items' key={item.Class_ID} >{item.Subject_Name} {item.Class_ID} hi</button>
                    ))}
                     
    </ul>

</>


}

export default Classes