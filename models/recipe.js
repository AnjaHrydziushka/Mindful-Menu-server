'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {});
  recipe.associate = function(models) {
    recipe.belongsToMany(models.ingredient, {
      through: "recipe_ingredients",
      foreignKey: "recipeId"
    });
  };
  return recipe;
};