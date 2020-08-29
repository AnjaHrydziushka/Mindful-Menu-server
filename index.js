const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const recipesRouter = require("./routers/recipes");
const authRouter = require("./routers/auth");
const corsMiddleWare = require("cors");

app.use(express.json());

app.use(corsMiddleWare());

app.post("/echo", (req, res) => {
    res.json(req.body);
  });

app.use(recipesRouter);
app.use(authRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });