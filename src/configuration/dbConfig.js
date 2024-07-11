const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Authentication", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});
// .then(() => {
//   console.log("Database connected successfully");
// })
// .catch((err) => {
//   console.log(err);
//   process.exit(1);
// });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = mongoose;
