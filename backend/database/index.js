const mysql = require('mysql')
var Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tunybest',
    multipleStatements:true
});
Connection.connect((err)=>{
    if(!err){
        console.log('Database connection successfuly')
    }else{
        console.log('Database connection failed!')
    }
});

module.exports = Connection ;