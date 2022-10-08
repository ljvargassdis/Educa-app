var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
  nombre: String,
  email: String,
  password: String
}, {
  timestamps: true
} 
);

module.exports = mongoose.model("user", user);
