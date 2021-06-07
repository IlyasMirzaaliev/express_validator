module.exports = (app) => {
  const { check, validationResult } = require("express-validator");

  app.get("", (req, res) => {
    res.render("index");
  });

  app.get("/register", (req, res) => {
    res.render("register");
  });

  app.post("/register",[
      check("username", "min 5 chapters")
        .exists()
        .isLength({ min: 5 }),
      check("email", "Email in is not valid")
        .isEmail()
        .normalizeEmail(),
        check('mobNum')
        .exists()
        
    ],(req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('register', {
          alert
        })
      }
    }
  );
};
