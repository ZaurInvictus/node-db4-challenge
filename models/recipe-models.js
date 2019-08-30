const db =require('../data/db-config')

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
}


function getRecipes() {
  return  db('recipes')
}


function getInstructions(recipe_id) {
  return db('recipes')
    .select(
      'recipe_name',
      'instructions.instruction_desc'
    )
    .innerJoin('instructions', 'instructions.recipe_id', 'recipes.id')
    .where({ recipe_id }).first()
}



function getShoppingList(recipe_id) {
  return db('recipes')
    .select(
      'recipe_name',
      'ingredients.ingredient_name',
      'shoppingList.ingredients_quantity',
    )
    .innerJoin('ingredients', 'ingredients.id', 'shoppingList.ingredient_id')
    .join('shoppingList', 'recipes.id', 'shoppingList.recipe_id')
    .where({ recipe_id }).first()
}





