'use strict';
module.exports = (sequelize, DataTypes) => {
  const quantity = sequelize.define('quantity', {
    amount: DataTypes.INTEGER
  }, {});
  quantity.associate = function(models) {
    quantity.belongsToMany(models.ingredient, {
      through: "ingredient_quantities",
      foreignKey: "quantityId"
    });
  };
  return quantity;
};