const express = require('express');
const router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Passport configuration
passport.use(new LocalStrategy(userModel.authenticate()));

// GET home page
router.get('/', (req, res) => {
  res.render("index", { title: "express" });
});

router.get('/login', (req, res) => {
  res.render("login");
});


// GET profile page, only accessible if logged in
router.get("/profile", isLoggedIn, (req, res) => {
  res.send("profile");
});

router.post('/register', (req, res) => {
  const { username, email, password, fullName } = req.body;
  const newUser = new userModel({ username, email, fullName });
  console.time('RegisterTime'); // Start timer
  userModel.register(newUser, password)
    .then(() => {
      console.timeEnd('RegisterTime'); // End timer
      passport.authenticate("local")(req, res, () => {
        res.redirect("/profile");
      });
    })
    .catch(err => {
      console.timeEnd('RegisterTime'); // End timer
      console.error("Registration error: ", err); // Log detailed error
      res.redirect('/');
    });
});

// POST login
router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}));

// GET logout
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;