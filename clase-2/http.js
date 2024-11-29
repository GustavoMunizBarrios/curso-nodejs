const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

console.log(process.env);
const desiredPort = process.env.PORT ?? 1234;

server.listen(desiredPort, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
