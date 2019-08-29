const express = require('express')
const router = express.Router()
const knex = require('knex')

const db = require('../data/db-config')


router.get('/', (req, res) => {
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    res.status(500).json({message: 'error getting recipes'})
  })
})


module.exports = router