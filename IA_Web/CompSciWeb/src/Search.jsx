import React, { useState, useEffect, useContext } from 'react'
import './GivingFeedBack.css'
import axios from 'axios'
import Select from "react-select";
import { DataContext } from "./DataContext";


const [students, setStudents] = useState([]);
const getStudent=()=>{
    axios.get('http://localhost:3001/api/students')
        
    .then(response => {
       setStudents(response.data);
 
     console.log(students)
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setStudents([]);  // Clear the data if an error occurs
    });


}

const Search = () =>{

 const [selectedSearch, setSearch] = useState(0); //set search

 const [selectedClass, setSelectedClass] = useState(0); //set class

 const [selectedStudent, setSelectedStudent] = useState('');//set student

 const [selectedAssignment, setSelectedAssignment] = useState(0);//set assignment

 let error = false;// if true, search cannot happen

 //choosing the search
 const choosingSearch =(event) =>{

    setSearch(parseInt(event.target.value, 10));

}


    //choosing the class
    const handleClass =(event) =>{

        setSelectedClass(parseInt(event.target.value, 10));

    }

    //choosing the student
    const handleStudent =(event) =>{
        setSelectedStudent(event.target.value);
        if(selectedStudent != "")
            {
            let valid = false;
             for (let i = 0; i < students.length; i++)
                {
              let name = students[i].First_name + " " + students[i].Last_name
                  if(name == selectedStudent){
                    valid = true;
                    break;
                  }
            
             }

             if (valid == false){
                error = true;
             }
             else{
                error = false;
             }

         }
    }

    const handleSearch=()=>{
        switch(Search) {
            case 1:
                

              // code block
              break;
            case 2:
              // code block
              break;
           case 3:

            break;
            default:
              // code block
          }
          

    }



     //choosing the assignment
     const handleAssignment =(event) =>{

        setSelectedAssignment(parseInt(event.target.value, 10));

    }

    return<>

     {//assignment search
     }

     <select 
         name="search" 
         id="selectSearch"
         onChange={choosingSearch}
         >
           <option value="0">Select your option</option>
            <option value="1">Class</option>
            <option value="2">Assignment</option>
            <option value="3">Student</option>
     
         </select>

    {//class select
    }
     <select 
    name="classes" 
    id="selectClass"
    onChange={handleClass}
    
    >
      <option value="0">Select your option</option>
    {classes.map((item) => (

        <option key={item.id} value={item.id}>{item.name}</option>
    ))
    
    }

    

    </select>
    
     {//Student select
     }
          <input
            type="text"
            placeholder="Enter your password"
            value={selectedStudent}
            onChange={handleStudent}
            id="selectStudent"
          />

      {//assignment select
     }

     <select 
         name="assignment" 
         id="selectAssignment"
         onChange={handleAssignment}
         
         >
           <option value="">Select your option</option>
              {classes.map((item) => (
     
              <option key={item.id} value={item.id}>{item.name}</option>
              ))
              
             }
     
      
     
         </select>
    </>


}

export default Search