const express = require('express')
const path = require('path')
const hbs = require('hbs');
const templatePath = path.join(__dirname, "./template")

const app = express()
app.set("view engine", 'hbs')
app.set('views', templatePath);


app.use('/', (req, res) => {
    res.render('index')
})

app.listen(2020, () => {
    console.log('server is listening on post 2020...')
})