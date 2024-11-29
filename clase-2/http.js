const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received", req.url);
  res.end("Hola mundo");
});

const desiredPort = process.env.PORT ?? 1234;

server.listen(desiredPort, () => {
  console.log(`Server running on port http://localhost:${desiredPort}`);
});
