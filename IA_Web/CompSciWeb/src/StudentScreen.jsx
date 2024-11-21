import './StudentScreen.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Outlet, Link } from "react-router-dom";






    const StudentScreen = () => {

    const [refresh, setRefresh] = useState(0);
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    let ID = 0;
    let assignmentScreen = false;
    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    
    
      }, []);

    const handleClick = () => {
        if (input) {
            axios.post('http://localhost:3001/api/data', { data: input })
                .then(response => {
                    setData([...data, { id: response.data.id, data: input }]);
                    setInput('');
                })
                .catch(error => {
                    console.error('Error posting data:', error);
                });
        }
    };

      const sayHi = (event) => 
     {
        console.log(event.target.getAttribute('a-key'));
        assignmentScreen = true;
        console.log(assignmentScreen)
        setRefresh(refresh + 1);
        
        
         
      };

      

      console.log("grass");
      if(assignmentScreen == true){
        
     
      }
      else{
        return(
           

            <div>
                
               
                
                
                
               
                
                
                <ul id='list'>
                    {data.map(item => (
                        
                        <button id='items' a-key={item.id} key={item.id}  onClick={sayHi }><div id='image'></div>{item.data} {item.id} <Link to="/assignmentScreen"> Assignment</Link> </button>
                    ))}
                     
                </ul>
               
              
               
                <Outlet />
            </div>
        );
      }
    

    }

    



export default StudentScreen