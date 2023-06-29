const express = require('express')
const app = express()
const port = 3000

app.get('/tejaswini', (req, res) => {
  res.send("Tejaswini's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})