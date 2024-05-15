// app.js
const express = require('express')
const app = express()
const port = 8080

// hello world
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})