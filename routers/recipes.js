const express = require('express');
const { Router } = express;
const router = new Router();
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Quantity = require("../models").quantity;

// GET list of all recipes
router.get("/", async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll({
            include: {
                model: Ingredient,
                include: [Quantity]
            }
        });
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

// GET all recipes by tags
router.get("/:tag", async (req, res, next) => {
    try {
        const tag = req.params.tag
        const recipesByTag = await Recipe.findAll({
            where: {
                tag: tag
            }
        })
        if(!recipesByTag) {
            res.status(404).send("Oops! Couldn't find anything")
        } else {
            res.send(recipesByTag)
        } 
    } catch(e) {
        next(e)
    }
})

module.exports = router;