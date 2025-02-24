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

const [result, setResult] = useState([]);

let selectedStudent_ID = 0; //id of selected student

 const {teacherClasses, setTeacherClasses} = useContext(DataContext); //classes

 const {teacherAssignments, setTeacherAssignments} = useContext(DataContext); //assignments

 const [schedule, setSchedule] = useState({}); //schedule of student


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
                    selectedStudent_ID = students[i].Student_ID;
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

    const getSchedule =() =>{
        axios.get('http://localhost:3001/api/schedule', { params: { Student_ID: selectedStudent}})
        
        .then(response => {
           
            
            
           setSchedule(response.data);
     
         console.log(classes)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setSchedule([]);  // Clear the data if an error occurs
        });
    }

    const handleSearch=()=>{
        let currentResult = [];
        switch(Search) {
          
            case 1: //class
                if(!selectedAssignment == 0){
                    //finding the assignment class id
                    let target = 0;
                    for(let i =0; i< teacherAssignments.length; i++){
                        if( teacherAssignments[i].Assignment_ID = selectedAssignment)
                            {
                                target = i;
                        }
                        //finding the class
                        for(let i =0; i< teacherClasses.length; i++){
                            if( teacherClasses[i].Class_ID = teacherAssignments[target].Class_ID)
                                {
                                  currentResult.push(teacherClasses[i])
                            }
                      
                    }
                }
            }
            else{
                    currentResult = teacherClasses;
            }

            if(!selectedStudent == 0)
                {
                    getSchedule;

                    for(let i = 0; i < currentResult.length; i++)
                        {
                            if(currentResult[i].Class_ID == schedule.Class_ID){
                                setResult(prevResult => [...prevResult, currentResult[i]]);
                            }
                    }
            }
            else{
                setResult(currentResult);
            }

            

              // code block
              break;
            case 2://assignment
                //check if class is a condition
                if(!selectedClass==0)
                    {
                        for(let i = 0; i < teacherAssignments.length; i++)
                            {
                            if(teacherAssignments[i].Class_ID == selectedClass)
                                {
                                    currentResult.push(teacherAssignments[i])
                            }
                                
                        }
                }

              // code block

              break;
           case 3://student

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