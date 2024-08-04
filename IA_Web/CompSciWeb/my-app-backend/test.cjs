

    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
    const cors = require('cors');
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

// API Endpoints
app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM test', [], (err, rows) => {
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

  // sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name)';
  // db.run(sql);
   // db.run("INSERT INTO users(id, first_name) VALUES(7, 'Ryan')")
    console.log('end')
