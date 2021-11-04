const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("connect",function() {
    console.log("Successfully connected to game server");
    conn.write('Name: Niv');
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};





module.exports = connect;
