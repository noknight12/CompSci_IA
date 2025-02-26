import React, { useState } from "react";
import axios from '../node_modules/axios';
import VariableManager from "./VariableManager";
import './LogIn.css';
import { useNavigate, Outlet, Link  } from 'react-router-dom';

function LogIn(){
   
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [isStudent, setIsStudent] = useState(true);
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if (email && isStudent) {
        axios.get('http://localhost:3001/api/searchStudent', { params: { query: email, pass: password }})
            .then(response => {
                setData(response.data);
                console.log(email);
                console.log(password);
              console.log(response.data);
              console.log("hi");
                   if(response.data.length === 1){
                  
                    
                    
                    
                      navigate("/student");
                    console.log("hi");
                   
                   }
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);  // Clear the data if an error occurs
            });
    }
    else if(email && !isStudent){

      axios.get('http://localhost:3001/api/searchTeacher', { params: { query: email, pass: password }})
      .then(response => {
          setData(response.data);
          console.log(email);
          console.log(password);
          console.log(response.data);
             if(response.data.length == 1){
            
              
              
                
                navigate("/teacher");
              console.log("hi");
             
             }
          
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          setData([]);  // Clear the data if an error occurs
      });
    }


};
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Simulate API call
    console.log("Logging in with:", { email, password });
    alert("Login successful!");
  };

  return (
    <div id="container">
      <div id="box">
      <div id="shadow"></div>
      <form id="form" onSubmit={handleSubmit}>
      
        <h2 id="header">Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div className="field">
          <label>UserName</label>
          <input
            className="input"
            type="text"
            placeholder="Enter your Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button id="hi"type="submit" onClick={handleSearch}>
          Login
        </button>
        <div id="buttons">
        <button className="student but"onClick={() => setIsStudent(true)}>Student</button>
        <button className="teacher but"onClick={() => setIsStudent(false)}>Teacher</button>
        </div>
      </form>

      </div>
      
    
     
      <Outlet />
    </div>
  
  );
};

const styles = {
  container: {
  
  background: "#73AD21",
  
  width: "100vw",
  height: "100vh",
  },
  form: {
    borderradius: "25px",
  background: "#73AD21",
  
  width: "200px",
  height: "150px",
  },
  header: {
    textAlign: "center",
    
  },
  field: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },

  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
};



export default LogIn