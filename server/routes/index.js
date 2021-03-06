const express = require('express');
const router = express();
const db = require('../config/db')

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req,res) => {
    db.query('SELECT * FROM pjt', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})
router.get('/getData', (req, res) => {
    db.query("SELECT * FROM pjt", (err, rows) => {
    if (!err) {
        res.send(rows);
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
    });
});
 
module.exports = router;