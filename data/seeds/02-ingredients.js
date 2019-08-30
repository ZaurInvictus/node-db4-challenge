exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
    return knex('ingredients').insert([
     {ingredient_name: 'meat'},
     {ingredient_name: 'leaves'},
     {ingredient_name: 'cheese'},
     {ingredient_name: 'onion'}
   ]);
  })
};
