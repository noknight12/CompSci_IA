import React, { useState } from "react";
import axios from '../node_modules/axios';
import VariableManager from "./VariableManager";

import { useNavigate, Outlet, Link  } from 'react-router-dom';

function LogIn(){
   
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if (email) {
        axios.get('http://localhost:3001/api/search', { params: { query: email, pass: password }})
            .then(response => {
                setData(response.data);
                console.log(email);
                console.log(password);
              console.log(data.length);
                   if(data.length == 1){
                  
                    
                      VariableManager(email);
                      navigate("/index");
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
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.header}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.field}>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter your Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} onClick={handleSearch}>
          Login
        </button>
       
      </form>
      <Outlet />
    </div>
  
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  form: {
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width: "300px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
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
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
};



export default LogIn