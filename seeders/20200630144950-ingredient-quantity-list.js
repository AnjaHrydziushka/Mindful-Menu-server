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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredient_quantities", null, {});
  }
};
