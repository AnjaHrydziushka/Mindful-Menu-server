const express = require("express");
const app = express();
const PORT = 4000;
const recipesRouter = require("./routers/recipes");
const corsMiddleWare = require("cors");

app.use(express.json());

app.use(corsMiddleWare());

app.post("/echo", (req, res) => {
    res.json(req.body);
  });

app.use("/", recipesRouter)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });