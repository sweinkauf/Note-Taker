const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});
