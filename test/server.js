const express = require("express");
const app = express();

app.use(express.json({}));

app.get("/test", (req, res) => res.sendStatus(200));

app.post("/new/user/age", (req, res) => res.send({ age: req.body.age + 3 }));

app.listen(80, () => {
  console.log("listening on port 80");
});
