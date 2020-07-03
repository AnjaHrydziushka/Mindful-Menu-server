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
        {
          name: "toast bread slices",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cream cheese",
          unit: "tsp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "avocado",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tomato",
          unit: "g",
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
          name: "chia seeds",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cow (or plant) milk",
          unit: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fruites or berries",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "zucchini",
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
          name: "oat bran",
          unit: "tbsp",
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
          name: "onion",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sour cream or greek yogurt",
          unit: "tbsp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "banana",
          unit: null,
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
          name: "almonds",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dark chocolade",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chickpea",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "greens (can be parsley, cilantro, dill, etc)",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "rice (or chickpea) flour",
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "garlic head",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vegetables (tomato, cucumber)",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lettuce",
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredients", null, {});
  }
};
