import React, { createContext, useState, useEffect } from "react";

import axios from 'axios'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  
  const [num, setNum] = useState(1);

 

  //getting all schedules
  useEffect(() =>{
    setNum(localStorage.getItem("id"));
    axios.get('http://localhost:3001/api/assignment', { params: { Student_ID: num}})
    .then(response => {
        
        
        setAssignments(response.data)
       
       
        
        console.log(assignments);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setAssignments([]);  // Clear the data if an error occurs
    });

  }, []);
    //Assignment_list
   const [assignments, setAssignments] = useState([]);
    
    

      useEffect(() =>{
        setNum(localStorage.getItem("id"));
        axios.get('http://localhost:3001/api/assignment', { params: { Student_ID: num}})
        .then(response => {
            
            
            setAssignments(response.data)
           
           
            
            console.log(assignments);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setAssignments([]);  // Clear the data if an error occurs
        });
    
      }, []);

       //teacher assignments
       const [teacherAssignments, setTeacherAssignments] = useState([]);
       useEffect(() =>{
        setNum(localStorage.getItem("id"));
        axios.get('http://localhost:3001/api/teacherAssignment', { params: { Teacher_ID: num}})
        .then(response => {
            
            
            setTeacherAssignments(response.data)
           
           
            
            console.log(teacherAssignments);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setAssignments([]);  // Clear the data if an error occurs
        });
    
      }, []);

      //teacher classes
      const [teacherClasses, setTeacherClasses] = useState([]);
      useEffect(() =>{
        setNum(localStorage.getItem("id"));
        axios.get('http://localhost:3001/api/teacherClass', { params: { Teacher_ID: num}})
        
        .then(response => {
           
           setTeacherClasses(response.data);
     
            console.log(teacherClasses)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setTeacherClasses([]);  // Clear the data if an error occurs
        });


              
      }, []);
     

      //Classes
   const [classes, setClasses] = useState([]);
    
     useEffect(() =>{
      setNum(localStorage.getItem("id"));
        axios.get('http://localhost:3001/api/class', { params: { Student_ID: num}})
        
        .then(response => {
           
            
            
           setClasses(response.data);
     
         console.log(classes)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setClasses([]);  // Clear the data if an error occurs
        });


              
      }, []);
     


      //Giving FeedBack
  return (
    <DataContext.Provider value={{ assignments, setAssignments, classes, setClasses, teacherClasses, setTeacherClasses, teacherAssignments, setTeacherAssignments}}>
      {children}
    </DataContext.Provider>
  );

};