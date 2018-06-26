const path = require('path')
const express = require('express')
const router = express.Router()
const history = require('connect-history-api-fallback');

const indexRoute = router.get('/hunt-admin', (req, res) => {
  res.status(200).render('index')
})

var app = express();

app.use(history());
app.use(express.static(path.join(__dirname, 'dist'))) 
app.get('/hunt-admin', indexRoute)

/* app.use((req, res) => {
  res.status(404).send('File not found!')
})  */

app.listen(8080, '127.0.0.1', () => {
  console.log('ther server is running at port ' + 8080)
})