const { recipe, ingredient, recipe_ingredient } = require("./models");

async function listsWithRecipes() {
    const recipes = await recipe.findAll({
      include: [ingredient],
    });
  
    return recipes.map((recipe) => recipe.get({ plain: true }));
  }
  
  // listsWithRecipes().then((recipe) => console.log(recipe));

  async function oneRecipe() {
    const oneRecipe = await recipe.findByPk(1);
    return oneRecipe.get({ plain: true });
  }
  
  // oneRecipe(1).then(oneRecipe => console.log("one recipe by id", oneRecipe));

  async function ingredientList() {
    const ingredients = await ingredient.findAll();
  
    return ingredients.map((product) => product.get({ plain: true }));
  }
  
  // ingredientList().then((product) => console.log(product));

  async function ingredientsWithAmount() {
    const ingredients = await ingredient.findAll({
      include: { model: recipe_ingredient, attributes: ["amount"] },
    });
  
    return ingredients.map((product) => product.get({ plain: true }));
  }
  
  ingredientsWithAmount().then((product) => console.log(product));