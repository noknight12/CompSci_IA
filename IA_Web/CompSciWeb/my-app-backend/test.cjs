

    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
    const multer = require("multer");
    const cors = require('cors');
    const bodyParser = require("body-parser")
    const app = express();
    const PORT = 3001;

    app.use(cors());
    app.use(express.json());


const db = new sqlite3.Database("./my-app-backend/Stuff.sqlite", (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

//Create a table if it doesn't exist
//db.run('CREATE TABLE test (id INTEGER PRIMARY KEY, data TEXT)', (err) => {
  // if (err) {
 //      console.error('Error creating table', err);
 //  }
//});

//API Endpoints
 app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM Assignments WHERE Class_ID = ?', [], (err, rows) => {
       if (err) {
            res.status(500).send(err.message);
            return;
         }
        res.json(rows);
     });
 });

 app.post('/api/data', (req, res) => {
    const { data } = req.body;
     db.run('INSERT INTO test (data) VALUES (?)', [data], function (err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json({ id: this.lastID });
     });
 });


// app.get('/api/data', (req, res) => {
//     const { entryID} = req.body; 
//   const hi =  db.get('SELECT name FROM Database WHERE ID = ?;', [entryID], function (err, row) {
//         if (err) {
//             res.status(500).send(err.message);
//             return;
//         }
//         res.json({ name: row.name });
//     });
// });              

// app.get('/api/data/:id', (req, res) => {
//     const { id } = req.params;
//     db.get('SELECT * FROM test WHERE id = ?', [id], (err, row) => {
//         if (err) {
//             res.status(500).send(err.message);
//             return;
//         }
//         if (row) {
//             res.json(row);
//         } else {
//             res.status(404).send('Row not found');
//         }
//     });
// });


app.get('/api/search', (req, res) => {
    const { query, pass } = req.query;  // Destructure both query and pass from req.query
    
    // SQL query with placeholders for parameters
    const sql = "SELECT * FROM Student WHERE User_name = ? AND Password = ?";

    // Use db.all to fetch all matching rows
    db.all(sql, [query, pass], (err, rows) => {
        console.log(`Query: ${query}, Pass: ${pass}`); // Log the inputs for debugging
        if (err) {
            res.status(500).send(err.message); // Send error message if any
            return;
        }
        
        res.json(rows); // Send the matching rows as JSON
    });
});

//getting students
app.get('/api/students', (req, res) => {
    
    db.all('SELECT Students.Student_ID, Students.First_name, Students.Last_name FROM Students', [], (err, rows) => {
       
       if (err) {
            res.status(500).send(err.message);
            return;
         }
            res.json(rows);
     });
 });

 //getting schedules
 app.get('/api/schedule', (req, res) => {
    const { Student_ID } = req.query;
    db.get('SELECT * FROM Schedule WHERE Schedule.Student_ID =?', [Student_ID], (err, rows) => {
       
       if (err) {
            res.status(500).send(err.message);
            return;
         }
            res.json(rows);
     });
 });
 //getting teacher classes
 app.get('/api/teacherClass', (req, res) => {
    const { Teacher_ID } = req.query;
    db.all('SELECT Classes.Class_ID, Classes.Icon, Subjects.Subject_Name FROM Classes JOIN Subjects ON Classes.Subject_ID = Subjects.Subject_ID WHERE Classes.Teacher_ID = ?', [Teacher_ID], (err, rows) => {
       
       if (err) {
            res.status(500).send(err.message);
            return;
         }
         
            const products = rows.map((row) => ({
                id: row.Class_ID,
                name: row.Subject_Name,
               
                image: row.Icon ? `data:image/png;base64,${Buffer.from(row.Icon).toString("base64")}` : null,
            })); 
         
         res.json(products);
     });
 });

 //getting teacher assignments
 app.get('/api/teacherAssignment', (req, res) => {
    const { Teacher_ID } = req.query;
    db.all('SELECT Assignment.Assignment_ID, Assignment.Class_ID, Assignment.Name, Assignment.Description, Assignment.Completed FROM Assignment JOIN Classes ON Assignment.Class_ID = Classes.Class_ID WHERE Classes.Teacher_ID = ?', [Teacher_ID], (err, rows) => {
       
       if (err) {
            res.status(500).send(err.message);
            return;
         }
        res.json(rows);
     });
 });
 //getting classes

app.get('/api/class', (req, res) => {
    const { Student_ID } = req.query;
    db.all('SELECT Classes.Icon, Subjects.Subject_Name, Schedule.Class_ID FROM Schedule JOIN Classes, Subjects ON Schedule.Class_Id = Classes.Class_ID AND Classes.Subject_ID = Subjects.Subject_ID WHERE Schedule.Student_ID = ?', [Student_ID], (err, rows) => {
        console.log(Student_ID); 
       if (err) {
            res.status(500).send(err.message);
            return;
         }
         
            const products = rows.map((row) => ({
                id: row.Class_ID,
                name: row.Subject_Name,
               
                image: row.Icon ? `data:image/png;base64,${Buffer.from(row.Icon).toString("base64")}` : null,
            })); 
         
         res.json(products);
     });
 });

 app.get('/api/assignment', (req, res) => {
    const { Student_ID } = req.query;
    db.all('SELECT Assignment.Name, Assignment.Assignment_ID, Subjects.Subject_Name FROM Assignment JOIN Schedule, Subjects, Classes ON Schedule.Class_ID = Assignment.Class_ID AND  Schedule.Class_Id = Classes.Class_ID AND Classes.Subject_ID = Subjects.Subject_ID WHERE Schedule.Student_ID = ?', [Student_ID], (err, rows) => {
      
       if (err) {
            res.status(500).send(err.message);
            return;
         }
        res.json(rows);
     });
 });

 //all schedule
 app.get('/api/allSchedules', (req, res) => {
    
    db.all('SELECT * FROM Schedule', [], (err, rows) => {
       
       if (err) {
            res.status(500).send(err.message);
            return;
         }
            res.json(rows);
     });
 });


 app.get('/api/StudentInfo', (req, res) => {
    db.all('SELECT Students.Student_ID FROM Students WHERE Students.First_name = ?;', [], (err, rows) => {
       if (err) {
            res.status(500).send(err.message);
            return;
         }
        res.json(rows);
     });
 });

 app.get('/api/posts', (req, res) => {
    const { Class_ID } = req.query;
    db.all('Select * FROM Post WHERE Class_ID = ?', [Class_ID], (err, rows) => {
        console.log(Class_ID); 
       if (err) {
            res.status(500).send(err.message);
            return;
         }
        res.json(rows);
     });
 });

 //uploading files
 // File upload route
 const upload = multer({ storage: multer.memoryStorage() });

 // File upload route
 app.post('/api/upload', upload.single("fileData"), function (req, res) {
   if (!req.file) {
     return res.status(400).json({ message: "No file uploaded" });
   }
 
   // Example: You already have these IDs, either from the session or elsewhere
   const assignmentID = req.body.assignmentID;  // Get Assignment ID from form data
    // Get Submission ID from form data
 
   const fileData = req.file.buffer;  // Binary data of the uploaded file

   console.log(Buffer.isBuffer(req.file.buffer)); 
   console.log("Assignment ID:", fileData);
console.log("Submission ID:", submissionID);
 
   const sql = "INSERT INTO Submission (Submission_ID, Assignment_ID, File) VALUES (?, ?, ?)";
   db.run(sql, [assignmentID, fileData], function (err) {
     if (err) {
       console.error("Database error:", err);
      console.log("hi")
       return res.status(500).json({ message: "Failed to upload file" });
      
     }
     res.json({ message: "File uploaded successfully" });
   });
 });

 app.post('/api/feedBack', (req, res) => {
    const { Class_ID, Content } = req.body;
     db.run('INSERT INTO FeedBack(Class_ID, FeedBack_Content)VALUES (?, ?);', [Class_ID, Content], function (err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json({ id: this.lastID });
     });
 });


 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

  // sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name)';
  // db.run(sql);
   // db.run("INSERT INTO users(id, first_name) VALUES(7, 'Ryan')")
    console.log('end')
