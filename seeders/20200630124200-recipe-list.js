'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Banana pancakes",
          image: "https://live.staticflickr.com/4813/31722526737_1c3a5518fb_b.jpg",
          description: "Cut banana in small pieces. Whip up egg to a thick foam. Whip up egg to a thick foam. Add banana, milk and flour, mix it very good. Fry pancakes on a pan.",
          tag: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipes", null, {});
  }
};
