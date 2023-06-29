const express = require('express')
const app = express()
const port = 3000

app.get('/suman', (req, res) => {
  res.send("Suman's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})