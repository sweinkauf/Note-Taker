const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
const apiroutes = require('./routes/api/apiroutes')
const htmlroutes = require('./routes/htmlroutes')

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// localhost:3001/api/
app.use('/api', apiroutes);

// localhost:3001/
app.use('/', htmlroutes);

app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});
