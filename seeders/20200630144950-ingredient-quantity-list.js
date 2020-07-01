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
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredient_quantities", null, {});
  }
};
