const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json')
const fs = require('fs')

module.exports = (app) => {
    // API GET Requests
  
    app.get('/api/notes', (req, res) => res.json(db));

    // app.post('/api/notes', (req, res) => {
    //     const newNoteObj = req.body
    //     console.log(newNoteObj)
    // })
   
  };