const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json')
const fs = require('fs')

module.exports = (app) => {
  
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        const newNoteObj = req.body
        newNoteObj.id = uuidv4()
        db.push(newNoteObj)
        res.json(db)
        fs.writeFile('./db/db.json', JSON.stringify(db), err => { if (err) throw err })
    })

    app.delete('/api/notes/:id', (req,res) => {
        for(each of db) {
            if(each.id === req.params.id) {
                db.splice(each,1)
                res.json(db)
                fs.writeFile('./db/db.json', JSON.stringify(db), err => { if (err) throw err })
            }
        }
    })
   
  };