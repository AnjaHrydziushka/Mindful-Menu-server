'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipe_ingredients",
      [
        {
          recipeId: 1,
          ingredientId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipe_ingredients", null, {});
  }
};
