const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopDev")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log("error occurs", error));

if (1 === 1) {
  mongoose.set("debug", true), mongoose.set("debug", { color: true });
}

// module.exports = mongoose;
