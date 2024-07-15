



  alert("sggsd")
  //const App = () => {
    //useEffect(() => {
      // Create a script element
     // const script = document.createElement('script');
      // Set the source of the script to the external file
      //script.src = '../public/ryan.js';
      // Set the script to load asynchronously
     // script.async = true;
      // Append the script to the document body
     // document.body.appendChild(script);
  
      // Cleanup function to remove the script when the component unmounts
    //  return () => {
        //document.body.removeChild(script);
    //  };
   // }, []);
  
   const express = require('express');
   const sqlite3 = require('sqlite3').verbose();
   const app = express();
   const port = 3000;


   const db = new sqlite3.Database('./Hello.db', (err) => {
    if (err) {
        console.error('Failed to open database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});
//sql = 'CREATE TABLE people(id INTEGER PRIMARY KEY, first_name)';
       // db.run(sql);
      
        

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

db.run("INSERT INTO users(id, first_name) VALUES(9, 'Ryan')")


// Handle shutdown to close database connection
process.on('SIGINT', () => {
  db.close((err) => {
      if (err) {
          console.error('Failed to close database:', err.message);
      } else {
          console.log('Database connection closed.');
      }
      process.exit(0);
  });

});

   
   // return(
    //  <>
    //  <Header/>
   //   <button onClick={() => window.greet()}>Greet</button>
   //   <Footer/>
  //    </>
  //  )
//};



