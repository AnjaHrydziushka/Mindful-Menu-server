'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'users', 
        [
          {
          email: "a@a.com",
          password: "a",
          createdAt: new Date(),
          updatedAt: new Date(),
          }
       ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
