const express = require('express');
const { Router } = express;
const router = new Router();
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Quantity = require("../models").quantity;

// GET list of all recipes
router.get("/", async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch(e) {
        next(e)
    }
})

// GET 1 recipe by ID
router.get("/recipes/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const oneRecipe = await Recipe.findByPk(id, {
            include: {
                model: Ingredient,
                include: [Quantity]
            }
        })
        if(!oneRecipe) {
            res.status(404).send("Recipe not found")
        } else {
            res.send(oneRecipe)
        } 
    } catch(e) {
        next(e)
    }
})

module.exports = router;