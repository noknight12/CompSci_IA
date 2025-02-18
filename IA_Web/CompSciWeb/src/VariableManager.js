import axios from 'axios'

let Manager = 
{
  currentUser: ""
};

const VariableManager = (username) => {
    
    localStorage.setItem("username", username);
    Manager.currentUser = username;

   
      axios.get('http://localhost:3001/api/StudentInfo') //fetching student =id
              .then(response => {
                  localStorage.setItem("StudentID", response.data)
              })
              .catch(error => {
                  console.error('Error fetching data:', error);
              });
            
    
    };



export default VariableManager