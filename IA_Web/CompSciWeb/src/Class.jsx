

const Class =() =>{

 const [data, setData] = useState([]);
 
    useEffect(() =>{
        axios.get('http://localhost:3001/api/chats', { params: { Student_ID: num}})
        .then(response => {
            
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setData([]);  // Clear the data if an error occurs
        });
              
      }, []);

    return<>
    
    <div id="icon">

    </div>
    <div id="pageblock">

    {data.map(item=> (
                        
         <button id='items' key={item.Class_ID} >{item.Subject_Name} {item.Class_ID} hi</button>
        ))}


    </div>
    </>


}