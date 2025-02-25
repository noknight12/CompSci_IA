import { getStudent } from "./Search";
 const toggleElement = (name) =>
{

  if(name == "search"){
    getStudent();
  }
  console.log(name);
  const paragraph = document.getElementById(name);
  const allData = document.getElementsByClassName("data");
   paragraph.style.display = 'none';
  if (paragraph.style.display == 'none') {
        for (let i = 0; i < allData.length; i++){
            allData[i].style.display = "none"
        }
      paragraph.style.display = "block";
  

  }
 
  
 
}

export default toggleElement
    