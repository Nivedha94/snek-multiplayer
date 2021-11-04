

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 87) {
    connection.key("Move: up");
  }
  // if (key === 65) {
  //   console.log("Move: up");
  // }
  // if (key === 83) {
  //   console.log("Move: up");
  // }
  // if (key === 68) {
  //   console.log("Move: up");
  // }
};

module.exports = setupInput;