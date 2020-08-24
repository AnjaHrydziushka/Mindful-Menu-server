const express = require('express');
const { Router } = express;
const router = new Router();
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Quantity = require("../models").quantity;
const User = require("../models").user;
const bcrypt = require('bcrypt');

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
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res
          .status(400)
          .send({ message: "Please provide both email and password" });
      }
  
      const user = await User.findOne({ where: { email } });
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).send({
          message: "User with that email not found or password incorrect"
        });
      }
  
      delete user.dataValues["password"]; // don't send back the password hash
      const token = toJWT({ userId: user.id });
  
      const artworks = await Artwork.findOne({
        where: { userId: user.id },
        include: [Bid]
      })
  
      return res.status(200).send({ token, ...user.dataValues, artworks });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }
  });


module.exports = router;