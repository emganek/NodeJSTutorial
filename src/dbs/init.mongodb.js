const mongoose = require("mongoose");
const { checkOverload } = require("../helpers/check.connect");
const { HOST, PORT, NAME } = require("../configs/config.mongodb");
const connectString = `mongodb://${HOST}:${PORT}/${NAME}`;

console.log("connect string", connectString);

class Database {
  constructor() {
    this.createDatabase();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  createDatabase() {
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("DB Connected!");
        // checkOverload();
      })
      .catch((error) => console.log("DB connection occurs error!", error));

    if (1 === 1) {
      mongoose.set("debug", true), mongoose.set("debug", { color: true });
    }
  }
}

const mongodbInstance = Database.getInstance();
exports.mongodbInstance;
// module.exports = mongodbInstance;
