'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "banana",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "eggs",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "rice flour",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "milk",
          unit: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "spinach pasta",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "spinach",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sour cream",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "salt, spices",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pita bread (lavash)",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "olive oil",
          unit: "tbsp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredients", null, {});
  }
};
