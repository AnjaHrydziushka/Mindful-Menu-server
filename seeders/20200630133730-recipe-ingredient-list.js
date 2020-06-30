'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipe_ingredients",
      [
        {
          recipeId: 1,
          ingredientId: 1,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 2,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 3,
          amount: 85,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 4,
          amount: 125,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipe_ingredients", null, {});
  }
};
