import React from "react";
import toggleElement from './Visibilty.js'
import VariableManager from "./VariableManager.js";
import './AssignmentScreen.css'
import Classes from "./Classes.jsx";



const AssginmentScreen = () => {
  

    return <>

              <div id ='background'>
              <div id='pages'>
              <p>
                <button className ='btn assignments' onClick={() => toggleElement("AssignmentsData")}>
                    Assignments
                </button>
                <br></br>
                <button className ='btn classes'  onClick={() => toggleElement("ClassesData")}>
                  Classes
                </button>
                <br></br>
                <button className ='btn messages'  onClick={() => toggleElement("messagesData")}>
                    Messages
                </button>

                
              </p>
          
              
              </div>
              <div id='verticalLine'></div>
    
              <div id="dataPanel">

                <div id='AssignmentsData' className="data">Assignments

                  <div id='icon'>
                   <img src="src\Class_One.png" id="book"></img>
                  </div>
                </div>
                <div id='ClassesData' className="data"> <Classes/></div>
                <div id='messagesData' className="data">hiii</div>


              </div>

             

              </div>
            
          
    
          
    
    
    
    </>;
  };
  

export default AssginmentScreen