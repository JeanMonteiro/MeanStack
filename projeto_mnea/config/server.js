const port = 3003

const bodyParses = require('body-parser')
const express = require('express')

const server = express()

server.use(bodyParses.urlencoded({extended : true}))

server.use(bodyParses.json());

server.listen(port, function () {
  console.log(`backend is running at ${port}. `)
})


server.get('/', function(req, res, next){
  res.send('Tá funfando!!!!')
})

module.exports = server
