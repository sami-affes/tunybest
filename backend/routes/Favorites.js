const express = require('express')
const router = express.Router()
const Connection = require('../database/index.js')

router.get('/',(req,res)=>{
    const sql = 'SELECT * FROM favorites'
    Connection.query(sql,(err,rows)=>{
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
})
router.get('/:id',(req,res)=>{
    const sql = 'SELECT * FROM favorites WHERE id = ?'
    Connection.query(sql,[req.params.id],(err,rows)=>{
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
})

router.post('/add',(req,res)=>{
    const newFavorite = req.body
    const sql = 'INSERT INTO favorites (userId,videoId) VALUES (?,?)'
    Connection.query(sql,[newFavorite.userId,newFavorite.VideoId],(err,rows)=>{
        if(!err)
        res.send("New data is posted successfully")
        else
        console.log(err)
    })
})
router.put('/:id',(req,res)=>{
    const updateFavorite = req.body
    const sql = 'UPDATE favorites SET userId = ? , videoId = ? WHERE id = ?'
    Connection.query(sql,[updateFavorite.userId, updateFavorite.videoId,req.params.id],(err,rows)=>{
        if(!err)
        res.send("Specific data is updated ")
        else
        console.log(err)
    })
})
router.delete('/',(req,res)=>{
    const sql = 'DELETE FROM favorites WHERE id <> 0 '
    Connection.query(sql,(err,rows)=>{
        if(!err)
        res.send('All data successfully deleted')
        else
        console.log(err)
    })
})
router.delete('/:id',(req,res)=>{
    const sql = 'DELETE FROM favorites WHERE id = ?'
    Connection.query(sql,[req.params.id],(err,rows)=>{
        if(!err)
        res.send('Specific data deleted successfully')
        else
        console.log(err)
    })
})


module.exports = router ;