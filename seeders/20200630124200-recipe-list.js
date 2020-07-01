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
        },
        {
          title: "Spinach pasta",
          image: "https://cdn.pixabay.com/photo/2017/09/10/16/37/meat-balls-2736127_960_720.jpg",
          description: "Cook pasta in boiled water until it's ready. Cook spinach in a pan without butter on a small fire with a little bit of water. Add sour cream to spinach, put some spices and keep it on fire untill all water is gone. Add cooked pasta and mix everything up.",
          tag: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pita chips",
          image: "https://live.staticflickr.com/2471/3611012383_10fa5ae0e8_b.jpg",
          description: "Cut each pita bread into triangles. In a small bowl, combine the oil and spices. Brush each triangle with oil mixture. Bake in the preheated oven for about 7-10 minutes, or until lightly browned and crispy. Watch carefully, as they tend to burn easily!",
          tag: "Snack",
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
