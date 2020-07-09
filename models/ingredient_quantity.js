'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient_quantity = sequelize.define('ingredient_quantity', {
    ingredientId: DataTypes.INTEGER,
    quantityId: DataTypes.INTEGER
  }, {});
  ingredient_quantity.associate = function(models) {
    ingredient_quantity.belongsTo(models.ingredient);
    ingredient_quantity.belongsTo(models.quantity);
  };
  return ingredient_quantity;
};