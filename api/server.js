const express = require('express')
const helmet = require('helmet')

const recipes = require('../routes/recipe-routes')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipes)

server.get('/', (req, res) => {
  res.status(200).json({message: 'Recipes Api is running'})
})


module.exports = server