const app = require("./src/app");
const process = require("process");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("server stop"));
});
