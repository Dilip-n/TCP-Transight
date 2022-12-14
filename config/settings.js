module.exports = {
  appEnv: process.env.NODE_ENV || 'dev',
  appLog: process.env.APP_LOG || 'dev',
  appPort: process.env.SP_TCP_HANDLER || 9000,
  appHost: '0.0.0.0',
  entryControllerIP: process.env.SP_ENTRY_CONTROLLER_IP || '192.168.0.99',
  exitControllerIP: process.env.SP_EXIT_CONTROLLER_IP || '192.168.0.100'
};
