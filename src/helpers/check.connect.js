const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const CHECK_DURATION = 5000;

const countConnection = () => {
  const numberConnections = mongoose.connections.length;
  console.log("Number connection", numberConnections);
};

const checkOverload = () => {
  setInterval(() => {
    countConnection();
    const numberCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log("Number cores:", numberCores);
    console.log("Memory usage:", memoryUsage / 1024 / 1024);
  }, CHECK_DURATION);
};

module.exports = {
  countConnection,
  checkOverload,
};
