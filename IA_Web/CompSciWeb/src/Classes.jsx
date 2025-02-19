import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Classes.css'

const Classes =() =>{

    const [products, setProducts] = useState([]);
    const num =1;
   useEffect(() =>{
        axios.get('http://localhost:3001/api/class', { params: { Student_ID: num}})
        
        
        
       
        .then(response => {
           
            
            
           setProducts(response.data)
            console.log(products)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setData([]);  // Clear the data if an error occurs
        });


              
      }, []);
return<>
    
<h1 id="head">Classes</h1>


 <ul id='bob'>
 {products.map((product) => (
    <button className="classes" key={product.id}>{product.image ? (
        <img className="images" src={product.image} alt={product.name}  />
    ) : (
        <p>No Image Available</p>
    )} <h3>{product.name}</h3></button>
                       
                            
                            
                            
                        
                    ))}
                     
    </ul>

</>


}

export default Classes