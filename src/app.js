const express = require('express')
const app = express()
const port = 3000

app.get('/harshita', (req, res) => {
  res.send("Harshita's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})