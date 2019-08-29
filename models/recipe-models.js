const db =require('../data/db-config')

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
}


function getRecipes() {
  return  db('recipes')
}


function getInstructions(id) {
  return  db('instructions as i') //Primary table
  .join('recipes', 'i.recipe_id', 'recipes.recipe_id')
  .select('i.id', 'recipes.recipe_name', 'i.instruction_desc' )
  .where({ recipe_id: id})
}



function getShoppingList(recipe_id) {
  return db('recipes')
    .select(
      'ingredients.name',
      'shoppingList.ingredients_quantity',
    )
    .innerJoin('ingredients', 'ingredients.id', 'shoppingList.ingredient_id')
    .leftJoin('shoppingList', 'recipes.id', 'shoppingList.recipe_id')
    .where({ recipe_id });
}





