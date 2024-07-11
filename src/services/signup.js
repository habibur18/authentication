const User = require("../modules/user.model");
const bcrypt = require("bcrypt");

async function CreateUserIntoDB({ name, email, password }) {
  console.log(email, password, name);
  try {
    if (password.length < 6 || password.length > 10) {
      throw new Error("Password must be at least 8 characters long and at most 10 characters long");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(" hashedPassword", hashedPassword);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });
    const createdUser = await user.save();
    return createdUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { CreateUserIntoDB };
