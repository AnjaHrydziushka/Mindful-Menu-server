'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    unit: DataTypes.STRING
  }, {});
  ingredient.associate = function(models) {
    ingredient.belongsToMany(models.recipe, {
      through: "recipe_ingredients",
      foreignKey: "ingredientId"
    });
    ingredient.belongsToMany(models.quantity, {
      through: "ingredient_quantities",
      foreignKey: "ingredientId"
    });
  };
  return ingredient;
};