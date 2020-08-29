const express = require('express');
const { Router } = express;
const router = new Router();
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Quantity = require("../models").quantity;
const User = require("../models").user;
const bcrypt = require('bcrypt');
const { toJWT, toData } = require('../auth/jwt');

//POST sign up
router.post("/signup", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password ) {
        res.status(400).send("Missing parameters");
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
          email,
          password: hashedPassword,
        });
        res.json(newUser);
      }
    } catch (e) {
      next(e);
    }
  });

  //POST login
  router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400).send({
        message: "Please supply a valid email and password",
      });
    } else {
        const user = await User.findOne({
            where: {
              email: email,
            },
          });
          if (!user) {
            res.status(400).send({
              message: "User with that email does not exist",
            });
          }
          else if (bcrypt.compareSync(password, user.password)) {
            const jwt = toJWT({ userId: user.id });
            res.send({
              jwt,
            });
          } else {
            res.status(400).send({
              message: "Password was incorrect",
            });
          }
    }
  });


module.exports = router;