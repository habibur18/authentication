const mongoose = require("../configuration/dbConfig");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // select: false,
  },
  role: { type: String, enum: ["admin", "customer"], default: "user" },
});

module.exports = mongoose.model("User", userSchema);
