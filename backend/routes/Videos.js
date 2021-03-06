const express = require('express')
const router = express.Router()
const Connection = require('../database/index.js')

router.get('/',(req,res)=>{
    const sql = 'SELECT * FROM videos'
    Connection.query(sql,(err,rows)=>{
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
})
router.get('/:id',(req,res)=>{
    const sql = 'SELECT * FROM videos WHERE id = ?'
    Connection.query(sql,[req.params.id],(err,rows)=>{
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
})

router.post('/add',(req,res)=>{
    const newVideo = req.body
    const sql = 'INSERT INTO videos (name,category,genre,property,urlImage,urlTrailor,urlVideo,counterVue,likeCounter,dislikeCounter) VALUES (?,?,?,?,?,?,?,?,?,?)'
    Connection.query(sql,[newVideo.name,newVideo.category,newVideo.genre,newVideo.property,newVideo.urlImage,newVideo.urlTrailor,newVideo.urlVideo,newVideo.counterVue,newVideo.likeCounter,newVideo.dislikeCounter],(err,rows)=>{
        if(!err)
        res.send("New data is posted successfully")
        else
        console.log(err)
    })
})
router.put('/:id',(req,res)=>{
    const updateVideo = req.body
    const sql = 'UPDATE videos SET name=?,category=?,genre=?,property=?,urlImage=?,urlTrailor=?,urlVideo=?,counterVue=?,likeCounter=?,dislikeCounter=? WHERE id = ?'
    Connection.query(sql,[updateVideo.name,updateVideo.category,updateVideo.genre,updateVideo.property,updateVideo.urlImage,updateVideo.urlTrailor,updateVideo.urlVideo,updateVideo.counterVue,updateVideo.likeCounter,updateVideo.dislikeCounter,req.params.id],(err,rows)=>{
        if(!err)
        res.send("Specific data is updated ")
        else
        console.log(err)
    })
})
router.delete('/',(req,res)=>{
    const sql = 'DELETE FROM videos WHERE id <> 0 '
    Connection.query(sql,(err,rows)=>{
        if(!err)
        res.send('All data successfully deleted')
        else
        console.log(err)
    })
})
router.delete('/:id',(req,res)=>{
    const sql = 'DELETE FROM videos WHERE id = ?'
    Connection.query(sql,[req.params.id],(err,rows)=>{
        if(!err)
        res.send('Specific data deleted successfully')
        else
        console.log(err)
    })
})


module.exports = router ;