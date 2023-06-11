const cluster = require("cluster");
const http = require("http");
const process = require("process");
const os = require("os");
 
const cpus = os.cpus;
 
const numCPUs = cpus().length;
 
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
 
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
 
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);
 
  console.log(`Worker ${process.pid} started`);
}