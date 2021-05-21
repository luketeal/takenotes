const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json')
const fs = require('fs')

module.exports = (app) => {
    // API GET Requests
  
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        console.log(db)
        const newNoteObj = req.body
        newNoteObj.id = uuidv4()
        db.push(newNoteObj)
        console.log(db)
        res.json(db)
        fs.writeFile('./db/db.json', JSON.stringify(db), err => { if (err) throw err })
    })

    app.delete('/api/notes/:id', (req,res) => {
        console.log(req.params.id)
        console.log(db)
        for(each of db) {
            if(each.id === req.params.id) {
                db.splice(each,1)
                console.log(db)
                res.json(db)
                fs.writeFile('./db/db.json', JSON.stringify(db), err => { if (err) throw err })
            }
        }
    })
   
  };