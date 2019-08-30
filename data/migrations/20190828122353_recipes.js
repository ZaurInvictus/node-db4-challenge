
exports.up = function(knex) {
  return knex.schema

  .createTable('recipes', table => {
    table.increments()

    table
    .string('recipe_name', 128)
    .notNullable()
    .unique()
  })

  .createTable('ingredients', table => {
     table.increments()

     table
     .string('ingredient_name', 256)
     .notNullable()
  })


  .createTable('shoppingList', table => {
     table.increments()

     table
     .float('ingredients_quantity') 
     .notNullable()

     table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

     table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })

  .createTable('instructions', table => {
     table.increments()

      table
      .string('instruction_desc', 512).notNullable()

      table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  // reverse order of creation
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('shoppingList')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};





