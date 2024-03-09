const appConfig = {
  dev: {
    HOST: process.env.DEV_DB_HOST,
    PORT: process.env.DEV_DB_PORT,
    NAME: process.env.DEV_DB_NAME,
  },
};

module.exports =
  process.env.ENV === "prod" ? appConfig["prod"] : appConfig["dev"];
