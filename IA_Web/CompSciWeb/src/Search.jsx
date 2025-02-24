import React, { useState, useEffect, useContext } from 'react'
import './GivingFeedBack.css'
import axios from 'axios'

import { DataContext } from "./DataContext";

const Search = () =>{

 const [selectedSearch, setSearch] = useState(0); //search

 const [selectedClass, setSelectedClass] = useState(0); //class

 const [selectedStudent, setSelectedStudent] = useState(0);//student

 const [selectedAssignment, setSelectedAssignment] = useState(0);//assignment



    //choosing the class
    const handleClass =(event) =>{

        setSelectedClass(event.target.value);

    }

    //choosing the student
    const handleStudent =(event) =>{

        setSelectedStudent(event.target.value);

    }

     //choosing the assignment
     const handleAssignment =(event) =>{

        setSelectedAssignment(event.target.value);

    }

    return<>

     {//assignment search
     }

     <select 
         name="search" 
         id="selectSearch"
         onChange={handleSearch}
         >
           <option value="">Select your option</option>
              {classes.map((item) => (
     
              <option key={item.id} value={item.id}>{item.name}</option>
              ))
              
             }
     
      
     
         </select>

    {//class select
    }
     <select 
    name="classes" 
    id="selectClass"
    onChange={handleClass}
    
    >
      <option value="">Select your option</option>
    {classes.map((item) => (

        <option key={item.id} value={item.id}>{item.name}</option>
    ))
    
    }

    

    </select>
    
     {//Student select
     }

<select 
    name="students" 
    id="selectStudent"
    onChange={handleStudent}
    
    >
      <option value="">Select your option</option>
         {classes.map((item) => (

         <option key={item.id} value={item.id}>{item.name}</option>
         ))
         
        }

 

    </select>

      {//assignment select
     }

     <select 
         name="students" 
         id="selectStudent"
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