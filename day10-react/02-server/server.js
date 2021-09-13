const express = require('express')
const app = express()

app.get('/getUsers', (req, res) => {
  res.send(['a', 'b', 'c'])
})

app.listen(5000, () => {
  console.log('ok')
})
