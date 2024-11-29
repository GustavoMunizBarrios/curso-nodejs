const http = require("node:http");
const { findAvailablePort } = require("./free-port");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
});

/* server.listen(3000, () => {
  console.log("Server running on port localhost:3000");
}); */
