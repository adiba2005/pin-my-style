//install mongo db
//install mongoosejs
   //np i mongoose
require and setup connection
//make schema
//create modal and export

//await async
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "hey hey hey"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
//passport.deserializeUser(usersRouter.deserializeUser());


let user = await userModel.findOne({_id: "66b1d7dd407913aa1aa011cb"})
    user.push(createdPost._id);
    await user.save();



//const express = require('express');
const router = express.Router();
const userModel = require('./users'); // Adjust path if `users.js` is located elsewhere
const postModel = require('./post'); // Adjust path if `post.js` is located elsewhere

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});

router.get('/create-user', async function(req, res) {
  try {
    const createdUser = await userModel.create({
      username: "adiba",
      password: "password123",
      posts: [],
      dp: "http://example.com/dp.jpg",
      email: "adiba@example.com",
      fullName: "Siddiqui Adiba"
    });
    res.send(createdUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/create-post', async function(req, res) {
  try {
    const createdPost = await postModel.create({
      text: "This is a new post",
      likes: 0,
      user= ""
    });
    let user = await userModel.findOne({_id: "66b1d7dd407913aa1aa011cb"})
    user.push(createdPost._id);
    await user.save();

    res.send(createdPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
