const router = require('express').Router();
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const DB_FILE = path.join(__dirname, '../../db/db.json')



router.get('/notes', (req, res) => {
    
    const notes = JSON.parse(fs.readFileSync(DB_FILE, {encoding: 'utf-8'}));
    console.log(notes)
    return res.json(notes)
});



router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(DB_FILE, {encoding: 'utf-8'}));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    notes.push(newNotes);
    fs.writeFileSync(DB_FILE, JSON.stringify(notes))
    res.json(notes);
});

module.exports = router