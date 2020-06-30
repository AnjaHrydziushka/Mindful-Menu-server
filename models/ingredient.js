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
  };
  return ingredient;
};