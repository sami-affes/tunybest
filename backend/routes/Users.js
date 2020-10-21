const express = require('express');
const router = express.Router();
const connection = require('../database/index');

router.get('/', (req, res) => {
    let sql = "SELECT * FROM users";
    connection.query(sql,(err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.post('/add', (req, res) => {
    let user = req.body;
    let sql = "INSERT INTO users (firstName,lastName, email, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(sql,[user.firstName, user.lastName, user.email, user.password, user.phone, user.address],(err, result) => {
        if(err) throw err;
        res.json("new user added")
    })
})

module.exports = router;