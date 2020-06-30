const express = require('express');
const { Router } = express;
const router = new Router();
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Quantity = require("../models").quantity;

// GET list of recipes
router.get("/test", async (req, res, next) => {
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

module.exports = router;