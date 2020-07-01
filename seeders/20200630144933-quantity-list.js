'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "quantities",
      [
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 85,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 125,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("quantities", null, {});
  }
};
