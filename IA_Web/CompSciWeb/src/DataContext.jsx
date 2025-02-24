import React, { createContext, useState, useEffect } from "react";

import axios from 'axios'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    //Assignment_list
   const [assignments, setAssignments] = useState([]);
      const num =1;
    

      useEffect(() =>{
        axios.get('http://localhost:3001/api/assignment', { params: { Class_ID: num}})
        .then(response => {
            
            
            setAssignments(response.data)
           
           
            
            console.log(assignments);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setAssignments([]);  // Clear the data if an error occurs
        });
              
      }, []);
      //teacher classes
      const [teacherClasses, setTeacherClasses] = useState([]);
      useEffect(() =>{
        axios.get('http://localhost:3001/api/class', { params: { Teacher_ID: num}})
        
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
    <DataContext.Provider value={{ assignments, setAssignments, classes, setClasses, teacherClasses, setTeacherClasses}}>
      {children}
    </DataContext.Provider>
  );

};