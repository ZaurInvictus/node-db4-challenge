exports.seed = function(knex) {
   return knex('recipes').insert([
      {recipe_name: 'dolma'},
      {recipe_name: 'pizza'},
      {recipe_name: 'kebab'}
    ]);
};
