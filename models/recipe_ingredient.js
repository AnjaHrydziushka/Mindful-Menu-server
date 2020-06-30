'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe_ingredient = sequelize.define('recipe_ingredient', {
    recipeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  recipe_ingredient.associate = function(models) {
    recipe_ingredient.belongsTo(models.recipe);
    recipe_ingredient.belongsTo(models.ingredient);
  };
  return recipe_ingredient;
};