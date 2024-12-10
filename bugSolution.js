const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

function gracefulShutdown(){
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() => {
    console.log('Server closed.');
    process.exit();
  });
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

//Improved error handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1); // Exit with an error code
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  gracefulShutdown();
});