require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/xyz', (req, res) => {
    res.send('dev')
})
app.get('/login', (req, res ) => {
    res.send(`<h1> send url </h1>`)
}) 
app.get('/youtube', (req, res ) => {
    res.send(`<h2> This is youtube Video </h2>`)
})
app.get('/github', (req, res ) => {
    res.json()
})
app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})