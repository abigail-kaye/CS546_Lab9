const palRoutes = require("./palindrome");

const constructorMethod = app => {
  app.use("/", palRoutes);

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
