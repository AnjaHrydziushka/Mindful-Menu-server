'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredient_quantities",
      [
        {
          ingredientId: 1,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 2,
          quantityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 3,
          quantityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 4,
          quantityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 5,
          quantityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 6,
          quantityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 7,
          quantityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 9,
          quantityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 10,
          quantityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 11,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 12,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 13,
          quantityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 14,
          quantityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 15,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 16,
          quantityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 17,
          quantityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 18,
          quantityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 19,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 20,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 21,
          quantityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 22,
          quantityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 23,
          quantityId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 24,
          quantityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 25,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 26,
          quantityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 27,
          quantityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 28,
          quantityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 29,
          quantityId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 31,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ingredientId: 32,
          quantityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredient_quantities", null, {});
  }
};
