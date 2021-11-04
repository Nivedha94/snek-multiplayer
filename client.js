const net = require("net");

const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect",function() {
    console.log("Successfully connected to game server");
    conn.write('Name: Niv');
    conn.write("Say: Hello!");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};





module.exports = connect;
