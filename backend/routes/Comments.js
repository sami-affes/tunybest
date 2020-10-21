const express = require('express');
const router = express.Router();
const connection = require('../database/index');

router.get('/',(req, res) => {
    let sql = "SELECT * FROM comments";
    connection.query(sql,(err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM  comments WHERE id = ${req.params.id}`
    connection.query(sql,(err, result)=> {
        if(err) throw err;
        res.json(result);
    })
})

router.post('/add', (req, res) => {
    let comment = req.body;
    let sql = "INSERT INTO comments (text,userId,videoId) VALUES (?, ?, ?)"
    connection.query(sql,[comment.text,comment.userId,comment.videoId],(err, result) => {
        if(err) throw err;
        res.json("new comment added");
    })
})

router.put('/:id', (req, res) => {
    let comment = req.body;
    let sql = `UPDATE comments SET text = ?, userId = ?, videoId =? WHERE id = ${req.params.id}`;
    connection.query(sql,[comment.text, comment.userId, comment.videoId],(err, result) =>{
        if(err) throw err;
        res.json("comment updated");
    })
})

router.delete('/:id', (req, res) => {
    let comment = req.body;
    let sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
    connection.query(sql,[comment.text, comment.userId, comment.videoId],(err, result)=> {
        if(err) throw err;
        res.json("comment deleted");
    })
})

router.delete('/', (req, res) => {
    let sql  = "DELETE FROM comments WHERE id != 0";
    connection.query(sql,(err, result)=>{
        if(err) throw err;
        res.json("comments cleared")
    })
})
module.exports = router;