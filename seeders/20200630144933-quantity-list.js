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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("quantities", null, {});
  }
};
