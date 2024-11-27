const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

server.listen(3000, () => {
  console.log("Server running on port localhost:3000");
});
