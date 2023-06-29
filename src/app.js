const express = require('express')
const app = express()
const port = 3000

app.get('/karthik', (req, res) => {
  res.send("Karthik's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})