const express = require('express')
const app = express()
const port = 3000

app.get('/tintuc', (req, res) => {
  res.send('Hello World!')
})
//127.0..1  - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost${port}`)
})