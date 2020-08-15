const bcrypt = require("bcrypt");
const { Router } = require("express");
const User = require("../models/").user;

const router = new Router();

router.post("/signup", async (req, res, next) => {
    try {
      const { email, password, fullName } = req.body;
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