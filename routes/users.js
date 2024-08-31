const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');


const Schema = mongoose.Schema; 
mongoose.connect("mongodb://127.0.0.1:27017/project", { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, 
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});
userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);

module.exports = User;