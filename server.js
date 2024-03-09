const app = require("./src/app");

const PORT = 4101;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("server stop"));
});
