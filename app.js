const net = require("net");
const client = require("./handlers/pg");
const config = require("./config/adaptor");
const server = net.createServer();

server.listen(config.port, config.host, () => {
  console.log(
    "TCP Handler Server is running on port " + config.host + ":" + config.port
  );
});

server.on("connection", function (sock) {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);

  sock.on("data", async function (data) {
    console.log(data.toString());
    // try {
    //   let query3 = `INSERT INTO raw_data (size,"deviceId", data, "dataFrom") VALUES (160,'123','{"ts":"123"}',123)`;
    //   await client.query(query3);
    //   console.log("Data saved");
    // } catch (error) {
    //   console.log(error);
    // }
  });
  sock.on("close", function (data) {
    console.log(
      "TCP CONNECTION CLOSED: " + sock.remoteAddress + ":" + sock.remotePort
    );
  });

  sock.on("error", (err) => {
    console.log(
      "Server socket error: socket disconnected " +
        sock.remoteAddress +
        ":" +
        sock.remotePort
    );
  });
});
