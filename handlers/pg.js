const config = require("../config/adaptor");
const { Pool, Client } = require("pg");

(async () => {
  // DB Connection
  try {
    client = new Client({
      host: config.pgdbHost,
      user: config.pgdbUsername,
      password: config.pgdbPassword,
      database: config.pgDbName,
      port: config.pgdbPort,
    });

    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = client;
