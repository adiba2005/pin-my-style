const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');


const Schema = mongoose.Schema; 
mongoose.connect("mongodb://127.0.0.1:27017/project", { useNewUrlParser: true, useUnifiedTopology: true })
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
    required: true
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
  },
  fullName: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});
userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);

module.exports = User;
