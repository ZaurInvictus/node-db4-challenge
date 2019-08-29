exports.seed = function(knex) {
  return knex('instructions').insert([
     {instruction_desc: "put meat into leaves", recipe_id: 1},
     {instruction_desc: "just mix everything", recipe_id: 2},
     {instruction_desc: "bake onions with meat", recipe_id: 3}
   ]);
};
