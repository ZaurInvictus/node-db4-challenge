exports.seed = function(knex) {
  return knex('shoppingList').del()
  .then(function () {
  return knex('shoppingList').insert([
     {recipe_id: 1, ingredient_id: 1, ingredients_quantity: 2},
     {recipe_id: 1, ingredient_id: 2, ingredients_quantity: 1},
     {recipe_id: 2, ingredient_id: 1, ingredients_quantity: 1},
     {recipe_id: 2, ingredient_id: 3, ingredients_quantity: 5},
     {recipe_id: 3, ingredient_id: 1, ingredients_quantity: 10},
     {recipe_id: 3, ingredient_id: 4, ingredients_quantity: 3},
   ]);
  })
};
