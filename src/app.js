const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const SingupRoute = require("./router/signupRouter");
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/user", SingupRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
