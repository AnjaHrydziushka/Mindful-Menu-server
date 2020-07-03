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
          tag: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spinach pasta",
          image: "https://cdn.pixabay.com/photo/2017/09/10/16/37/meat-balls-2736127_960_720.jpg",
          description: "Cook pasta in boiled water until it's ready. Cook spinach in a pan without butter on a small fire with a little bit of water. Add sour cream to spinach, put some spices and keep it on fire untill all water is gone. Add cooked pasta and mix everything up.",
          tag: "dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pita chips",
          image: "https://live.staticflickr.com/2471/3611012383_10fa5ae0e8_b.jpg",
          description: "Cut each pita bread into triangles. In a small bowl, combine the oil and spices. Brush each triangle with oil mixture. Bake in the preheated oven for about 7-10 minutes, or until lightly browned and crispy. Watch carefully, as they tend to burn easily!",
          tag: "snack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Toast with egg and avocado",
          image: "https://c1.wallpaperflare.com/preview/711/982/403/food-drink-food-healthy.jpg",
          description: "Dry bread in a toaster, fry an egg in a pan. Spread a cream cheese on a toast, put on top avocado, cutted tomato and the egg.",
          tag: "lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chia pudding",
          image: "https://live.staticflickr.com/3852/14448798451_712c18051f_b.jpg",
          description: "Stir together your chia seeds and milk in a mason jar or bowl. Leave it overnight in a fridge. In the morning, before eating add fruites or/and berries on yout choice.",
          tag: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Zucchini pancakes",
          image: "https://live.staticflickr.com/1856/42549762820_595e958eb6_b.jpg",
          description: "Clean and shred zucchini and squeeze the juice out of it. Mix egg, add oat brans, spinach and spices. Mix it with shredded zucchini. Fry pancakes in a pan and serve with sour cream or greek yogurt.",
          tag: "lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Homemade ice-cream",
          image: "https://cdn.pixabay.com/photo/2017/09/16/13/14/chocolate-ice-cream-2755456_960_720.jpg",
          description: "Cut banana in rounds and put into a friezer for 1 hour. Take it out of a freezer and leave in a room temperature for 20 min. Grind chocolade in small pieces. Soak almonds for 30 min in a water. Mix milk and banana with mixer for 2-3 min, add chocolade and grinded almonds and pour this coctail into forms for icecream. Put it into a freezer untill it freeze.",
          tag: "snack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chickpea cutlets",
          image: "https://p2.piqsels.com/preview/64/469/270/falafel-food-vegetarian-snack-thumbnail.jpg",
          description: "Cook chickpeas in boiled water. Mix it up with greens, flour and garlic with a blender. Make cutlets and fry on a pan. Serve with cutted vegetables and salad leaves.",
          tag: "dinner",
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
