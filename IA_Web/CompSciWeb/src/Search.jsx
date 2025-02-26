import React, { useState, useEffect, useContext } from 'react'
import './GivingFeedBack.css'
import axios from 'axios'

import { DataContext } from "./DataContext";

let students = [];


export const getStudent=()=>{//will be used in another file
    axios.get('http://localhost:3001/api/students')
        
    .then(response => {
       students =response.data;
 
   
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        students = [];  // Clear the data if an error occurs
    });

    console.log("aifh")

}




const Search = () =>{

 const [selectedSearch, setSearch] = useState(0); //set search

 const [selectedClass, setSelectedClass] = useState(0); //set class
 const [IDHolder, setIDHolder] = useState(0); //set class
 const[finalResult, setFinalResult] = useState([]);

 const [Input, setInput] = useState("");//set student
 let selectedStudent = "";
 const [selectedAssignment, setSelectedAssignment] = useState(0);//set assignment

 let error = false;// if true, search cannot happen
 const[allSchedules, setAllSchedules]  = useState([]);

let result = [];

let selectedStudent_ID = 0; //id of selected student

 const {teacherClasses, setTeacherClasses} = useContext(DataContext); //classes

 const {teacherAssignments, setTeacherAssignments} = useContext(DataContext); //assignments

 const [schedule, setSchedule] = useState({}); //schedule of student


 //choosing the search
 const choosingSearch =(event) =>{

    setSearch(parseInt(event.target.value, 10));

}

const getAllSchedules=()=>{
    console.log("afau");
    axios.get('http://localhost:3001/api/allSchedules')
        
    .then(response => {
       setAllSchedules(response.data);
        
     
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setAllSchedules([]);  // Clear the data if an error occurs
    });
}

    //choosing the class
    const handleClass =(event) =>{

        setSelectedClass(parseInt(event.target.value, 10));

    }

    //choosing the student
    const handleStudent =(event) =>{
        setInput(event.target.value)
         selectedStudent = event.target.value;
      
        if(selectedStudent != "")
            {
                console.log("jafh")
            let valid = false;
             for (let i = 0; i < students.length; i++)
                {
              let name = students[i].First_name + " " + students[i].Last_name
                    console.log(name)
                    console.log(selectedStudent)
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
                localStorage.setItem("studentName", selectedStudent)
                localStorage.setItem("studentID", selectedStudent_ID)
                setIDHolder(selectedStudent_ID)
                console.log(selectedStudent_ID + "af");
             }
             console.log(selectedStudent);

         }

         console.log(error);
    }

    const getSchedule =(student) =>{
        axios.get('http://localhost:3001/api/schedule', { params: { Student_ID: student}})
        
        .then(response => {
           
            
            
           setSchedule(response.data);
           console.log(schedule.Class_ID +",");
            
        
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setSchedule([]);  // Clear the data if an error occurs
        });
    }

    const handleSearch=()=>{

        let currentResult = [];
        result = []
        console.log(teacherAssignments);
        selectedStudent = Input;
        console.log(selectedStudent);
        
        selectedStudent_ID = IDHolder
        getAllSchedules();

    
        
        switch(selectedSearch) {
          
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
                      
                    }
                    for(let i =0; i< teacherClasses.length; i++){
                        if( teacherClasses[i].Class_ID = teacherAssignments[target].Class_ID)
                            {
                              currentResult.push(teacherClasses[i])
                            
                        }
                }
            }
            else{
                    currentResult = teacherClasses;
                    console.log("hfa");
            }

            if(!selectedStudent == "")
                {
                    console.log(selectedStudent_ID + "af");
                    let targetSchedules = [];

                    // get the schedules from the student
                    for(let i = 0; i< allSchedules.length; i++)
                        {
                            if(allSchedules[i].Student_ID == selectedStudent_ID){
                                console.log(currentResult.length)
                                targetSchedules.push(allSchedules[i])
                              
                              
                            }
                    }
                    console.log(targetSchedules)
                    console.log(currentResult)
                    for(let i = 0; i < currentResult.length; i++)//checking if the classes are the same as the schedules
                        {
                            for(let y = 0; y < targetSchedules.length; y++){
                                if(currentResult[i].id == targetSchedules[y].Class_ID){
                                    result.push(currentResult[i]);
                                    console.log("affa");
                                }
                            }
                           
                    }
            }
            else{
                result =currentResult;
                console.log(result);
            }

            result = result.map((row) => ({
                id: row.id,
                name: row.name,
               
               
            })); 
            setFinalResult(result);
            console.log(finalResult)

              // code block
              break;
            case 2://assignment
                //check if class is a condition
                console.log(2);
                console.log(selectedClass);
                if(!selectedClass==0)
                    {
                        for(let i = 0; i < teacherAssignments.length; i++)
                            {
                            if(teacherAssignments[i].Class_ID == selectedClass)
                                {
                                    currentResult.push(teacherAssignments[i])
                            }
                                
                        }
                        console.log(currentResult)
                }
                else{
                    currentResult = teacherAssignments;
                }


                if(!selectedStudent == "")
                    {
                        let targetSchedules = [];

                        // get the schedules from the student
                        for(let i = 0; i< allSchedules.length; i++)
                            {
                                if(allSchedules[i].Student_ID == selectedStudent_ID){
                                    console.log(currentResult.length)
                                    targetSchedules.push(allSchedules[i])
                                  
                                  
                                }
                        }
                        console.log(selectedStudent + "hello")
                        getSchedule(selectedStudent);//might remove
    
                        for(let i = 0; i < currentResult.length; i++)
                            {
                                for(let y = 0; y < targetSchedules.length; y++){
                                    if(currentResult[i].Class_ID == targetSchedules[y].Class_ID){
                                        console.log("fafawfsf")
                                        result.push(currentResult[i]);
                                    }

                                }
                                
                        }
                       
                }
                else{
                    result = currentResult;
                   console.log("wuhoh")
                }

                result = result.map((row) => ({
                    id: row.Assignment_ID,
                    name: row.Name,
                   
                  
                })); 
                setFinalResult(result);

              // code block

              break;
           case 3://student
                getAllSchedules;
           if(!selectedAssignment == 0) //checking if assignments is a condition
            {
                let targetSchedules = [];
                let targetAssignment =0
               for(let i = 0; i < teacherAssignments.length; i++){
                if(teacherAssignments[i].Assignment_ID == selectedAssignment){
                    targetAssignment = i;
                    break;
                }
                for (let i = 0; i < allSchedules.length; i++)
                    {
                      if(allSchedules[i].Class_ID == teacherAssignments[targetAssignment].Class_ID)  
                        {
                            targetSchedules.push(allSchedules[i].Student_ID);

                      }
                }

                for(let i = 0; i < targetSchedules.length; i++)
                {
                    for(let y = 0; y < students.length; i++)
                    {
                        if(students[y].Student_ID == targetSchedules[i]){
                        currentResult.push(students[y]);
                        }
                    }
                }



               } 
           }
           else{
            currentResult = students;

           }

           if(!selectedClass == 0)//check if class is a condition
           {

            let targetSchedules = [];
            console.log(currentResult)
          
            for(let i =0; i < currentResult.length; i++){

                for(let y = 0; y < allSchedules.length; y++)
                    {
                        if(currentResult[i].Student_ID == allSchedules[y].Student_ID)
                        {
                            console.log("afafgawge")
                            targetSchedules.push(allSchedules[y]);
                        }
                }
            }

            console.log(targetSchedules);

            let targetStudents = [];

            for(let i =0; i <targetSchedules.length; i++){
               
                    if(targetSchedules[i].Class_ID == selectedClass)
                        {
                            targetStudents.push(targetSchedules[i]);
                          }
                
            }
            console.log(targetStudents);

            for(let i =0; i <targetStudents.length; i++){

                for(let y =0; y <currentResult.length; y++)
                if(targetStudents[i].Student_ID == currentResult[y].Student_ID){
                    result.push(currentResult[y]);
                }

            }

           }
           else{

            result = currentResult
           }

           result = result.map((row) => ({
            id: row.Student_ID,
            name: row.First_name + " " + row.Last_name
           
           
        })); 
        setFinalResult(result);

            break;
            default:
                //no working
              // code block
          }

          console.log(result);

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
    {teacherClasses.map((item) => (

        <option key={item.id} value={item.id}>{item.id}{item.name}</option>
    ))
    
    }

    

    </select>
    
     {//Student select
     }
          <input
            type="text"
            placeholder="Enter Student"
            value={Input}
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
           <option value="0">Select your option</option>
              {teacherAssignments.map((item) => (
     
              <option key={item.Assignment_ID} value={item.Assignment_ID}>{item.Name}</option>
              ))
              
             }
     
      
     
         </select>

        {//searchButton
        }

        <button id="SearchBTN" onClick={handleSearch}>Search</button>



        {//result
        
        
        }


<ul>
    Results:
{finalResult.map((item) => (
     
     <li key={item.id}>{item.name}</li>
     ))
     
    }
</ul>
      
    </>


}

export default Search