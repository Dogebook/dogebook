// very much utils
require('dotenv').config();

// so much package
const express = require('express')

// wow variable
const app = express();
let port = process.env.PORT || 6969;

// much function
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`🚀 ${require('./package.json').name} v${require('./package.json').version} has launched to port ${port}!`)
});