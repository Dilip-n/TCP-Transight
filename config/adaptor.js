//Get all the settings
const setting = require("./settings.dev");

module.exports = {
  port: setting.appPort,
  host: setting.appHost,
  pgdbHost: setting.pgdbHost,
  pgdbPort: setting.pgdbPort,
  pgdbIsAuth: setting.pgdbIsAuth,
  pgdbUsername: setting.pgdbUsername,
  pgdbPassword: setting.pgdbPassword,
  pgDbName: setting.pgDbName,

  db: {
    pg: {
      // PGSQL - Sample URI
      // uri: 'postgres://user:pass@example.com:5432/dbname'
      uri: (() => {
        //If Username Password is set
        if (setting.pgdbIsAuth === "true") {
          return `postgres://${setting.pgdbUsername}:${setting.pgdbPassword}@${setting.pgdbHost}:${setting.pgdbPort}/${setting.pgDbName}`;
        }
        //Without auth
        return `postgres://${setting.pgdbHost}:${setting.pgdbPort}/${setting.pgDbName}`;
      })(),

      masterDb: `${setting.pgDbName}`,
      options: {},
      host: setting.pgdbHost,
      port: setting.pgdbPort,
      username: setting.pgdbUsername,
      password: setting.pgdbPassword,
    },
  },
};
