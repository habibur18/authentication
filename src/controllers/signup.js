const UserService = require("../services/signup");
const User = require("../modules/user.model");

async function CreateUser(req, res) {
  try {
    const { name, email, password } = req.body;
    console.log(email, password, name);

    const user = await UserService.CreateUserIntoDB({ name, email, password });

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = { CreateUser };
