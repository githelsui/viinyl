const express = require('express');
const parser = require('body-parser') //serves as a middleware for application
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ViinylDB',
});

app.use(cors())
app.use(express.json()) //get variable as a json object
app.use(parser.urlencoded({
    extended: true
}))

app.post('/', (req, res) => {
    console.log('yo')
});

app.get('/api/insert', (req, res) => {
    //request data coming from front-end
    const googleId = req.body.googleId;
    const email = req.body.email;
    const fullName = req.body.fullName;

    const sqlInsert = "INSERT INTO users (googleId, email, fullName) VALUES (?, ?)";
    db.query(sqlInsert, [googleId, email, fullName], (err, result) => {
        console.log(result);
    });
});

// client on port 3000, server on port 3001, other messed up server on port 4200
app.listen(3001, () => {
    console.log('server is running on port 3001')
});