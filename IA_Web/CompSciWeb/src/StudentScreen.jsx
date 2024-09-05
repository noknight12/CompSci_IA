import './StudentScreen.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Assignment from './Assignment'


class StudentScreen extends React.Component{

    render(){
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
     ID = 0;
     assignmentScreen = false;
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
        this.forceUpdate()
        return(<Assignment/>);
         
      };

      

      console.log("grass");
      if(assignmentScreen == true){
        
        return(<Assignment/>);
      }
      else{
        return(
           

            <div id="background">
                
                <div id="sidebar">
                
                </div>
                <div id='verticalLine'></div>
                <div id="dataPanel">
                
    
                <ul id='list'>
                    {data.map(item => (
                        
                        <button id='items' a-key={item.id} key={item.id}  onClick={sayHi }><div id='image'></div>{item.data} {item.id}</button>
                    ))}
                     
                </ul>
                </div>
            </div>
        );
      }
    

    

    }
}

export default StudentScreen