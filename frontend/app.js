const express = require('express')
const app = express()
const pool = require('C:/Users/Ankit Singh/Downloads/frontend/config/db.js')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/price' , async(req,res) => {
    let sql = "SELECT * FROM product"
    pool.execute(sql, function(err,result){
        if(err) throw err;
        res.render('home', {result})
    });
})

app.post('/price' , (req,res) => {    
    let sql = `SELECT * FROM product order by ${req.body.choose}`
    pool.execute(sql, function(err,result){
        if(err) throw err;
        res.render('home', {result})
    });
})

app.listen(3000, () => {
    console.log('Serving from port 3000')
})