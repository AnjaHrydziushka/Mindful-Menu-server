const { recipe, ingredient, recipe_ingredient } = require("./models");

async function listsWithRecipes() {
    const recipes = await recipe.findAll({
      include: [ingredient],
    });
  
    return recipes.map((recipe) => recipe.get({ plain: true }));
  }
  
  listsWithRecipes().then((recipe) => console.log(recipe));