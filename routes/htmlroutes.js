const router = require('express').Router();
const path = require('path');

// localhost:3001/
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// localhost:3001/notes
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;