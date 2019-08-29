
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
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references()
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

     table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references()
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })

  .createTable('instructions', table => {
     table.increments()

     table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references()
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

      table
      .string('instruction_desc', 512).notNullable()
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





