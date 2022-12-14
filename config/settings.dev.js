module.exports = {
  appEnv: process.env.NODE_ENV || "dev",
  appPort: process.env.TCP_HANDLER_PORT || 8008,
  appHost: process.env.TCP_HANDLER_HOST || "0.0.0.0",
  pgdbHost: process.env.PGDB_HOST || "localhost",
  pgdbPort: process.env.PGDB_PORT || "54323",
  pgdbIsAuth: process.env.PGDB_IS_AUTH || "true",
  pgdbUsername: process.env.PGDB_USERNAME || "master",
  pgdbPassword: process.env.PGDB_PASSWORD || "DHNNOQIYWMDZZPOQ",
  pgDbName: process.env.PGDB_NAME || "fts-app",
};
