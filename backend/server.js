const express = require("express");
const app = express();
// const { check, validationResult } = require("express-validator");

const PORT = 5000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./router/routers.js")(app);

const startServer = () => {
  app.listen(PORT, () => {
    console.info(`SERVER WORKS ON PORT ${PORT}`);
  });
};

startServer();
