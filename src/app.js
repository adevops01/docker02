const express = require('express')
const app = express()
const port = 3000

app.get('/supriya', (req, res) => {
  res.send("Supriya's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})