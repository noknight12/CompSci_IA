

//connect to db

//Create table

//drop table
//db.run("DROP TABLE users")


alert("gfj")
        
        const sqlite3 = require('sqlite3').verbose();
        let sql;
    alert("fmd")
        const db = new sqlite3.Database('./Data.db', sqlite3.OPEN_READWRITE, (err)=>{
            if(err) return console.error(err.message);
            });
           
       //  sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name,last_name,username,password,email)';
       // db.run(sql);
         db.run("INSERT INTO users(id, first_name,last_name,username,password,email) VALUES(2, 'Ryan', 'Reynolds', 'jojo', 'grate', 'bob@gmail.com')")
         
            
   
        
        

       

