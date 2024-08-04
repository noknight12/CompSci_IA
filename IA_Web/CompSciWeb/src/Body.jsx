import React, { useState, useEffect } from 'react';
import axios from '../my-app-backend/node_modules/axios';


function Body(){
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

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
    return (
        <div>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars">
                {data.map(item =>(
                     <option key={item.id}>{item.data}</option>
                ))}
           
            </select>
            <h1>Data from SQLite</h1>
            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Enter some data"
            />
            <button onClick={handleClick}>Add Data</button>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.data}</li>
                ))}
            </ul>
        </div>
    );
}
export default Body