var express = require('express');
var cors = require('cors');

const app = express()
const port = 3000

app.use(cors())
app.use('/',express.static(__dirname + '/Project' ))

// app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))