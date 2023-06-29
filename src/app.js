const express = require('express')
const app = express()
const port = 3000

app.get('/rajan', (req, res) => {
  res.send("Rajan's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})