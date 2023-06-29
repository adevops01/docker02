const express = require('express')
const app = express()
const port = 3000

app.get('/chetna', (req, res) => {
  res.send("Chetna's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})