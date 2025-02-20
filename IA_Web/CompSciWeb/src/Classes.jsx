import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Classes.css'
import Class from './Class'

const Classes =() =>{

    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const num =1;
     const [data, setData] = useState([]);
    

     
   useEffect(() =>{
        axios.get('http://localhost:3001/api/class', { params: { Student_ID: num}})
        
        
        
       
        .then(response => {
           
            
            
           setProducts(response.data)
            console.log(products)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setSelectedProductId([]);  // Clear the data if an error occurs
        });


              
      }, []);

      const handleClick = (id) => {
        setSelectedProductId(id);  // Store selected product ID
    
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
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);  // Clear the data if an error occurs
            });
    };

      
return<>
    
<h1 id="head">Classes</h1>


 <ul id='bob'>
 {products.map((product) => (

    

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
           {data.map(item=> (
                        
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