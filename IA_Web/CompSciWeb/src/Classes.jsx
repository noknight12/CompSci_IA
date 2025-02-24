import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './Classes.css'

import { DataContext } from "./DataContext";

const Classes =() =>{

    const {classes, setProducts} = useContext(DataContext);
    
    const num =1;
     const [posts, setPosts] = useState([]);
   
    

    

      const handleClick = (id) => {
         // Store selected product ID
    
        console.log(id);
        console.log("Selected Product ID:", id);  // Log correct value
        const paragraph = document.getElementById("bob");
        const classData = document.getElementById("ClassData");
        paragraph.style.display = 'none';
        classData.style.display = 'block';
    
        getPosts(id);  // Pass 'id' directly
    };
    
    const getPosts = (classId) => {  // Rename parameter for clarity
        axios.get('http://localhost:3001/api/posts', { params: { Class_ID: classId }})
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setPosts([]);  // Clear the data if an error occurs
            });
    };

      
return<>
    
<h1 id="head">Classes</h1>


 <ul id='bob'>
 {classes.map((product) => (

    

<button 
className="classes" 
key={product.id} 
onClick={() => handleClick(product.id)}
>
{product.image ? (
  <img className="images" src={product.image} alt={product.name} />
) : (
  <p>No Image Available</p>
)}
<h3>{product.name}</h3>
</button>
                       
                            
                        
                    ))}
                     
    </ul>

    <div id="ClassData">

           <ul>
           {posts.map(item=> (
                        
                        <p className='classItems' key={item.Post_ID} >
                          <div>{item.Sender_Name}</div> 
                          <div>{item.Content}</div>
                          </p>
                       
                    ))}
                    </ul>

    </div>

    

</>


}

export default Classes