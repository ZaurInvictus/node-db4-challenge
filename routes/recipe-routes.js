const express = require('express')
const router = express.Router()
const knex = require('knex')

const recipeModels = require('../models/recipe-models')


router.get('/', (req, res) => {
  recipeModels.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    res.status(500).json({message: 'error getting recipes'})
  })
})

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params
  recipeModels.getInstructions(id)
  .then(instructions => {
    res.status(200).json(instructions)
  }).catch(error => {
    res.status(500).json({message: 'error getting instructions'})
  })
})





module.exports = router