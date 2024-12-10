# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: inadequate error handling in HTTP servers.  The `bug.js` file shows an example of an HTTP server that doesn't properly handle errors, potentially leading to crashes and unexpected behavior. The `bugSolution.js` file provides a corrected version with improved error handling and a graceful shutdown mechanism.

## Problem

The `bug.js` server lacks comprehensive error handling. If an error occurs (e.g., port in use), the server will log an error to the console, but it won't gracefully shut down or provide informative feedback. This can result in unexpected application behavior and crashes.

## Solution

The `bugSolution.js` demonstrates how to improve error handling. It uses a `process.on('uncaughtException')` event listener to handle unexpected exceptions and gracefully shut down the server. It also implements a more sophisticated `server.on('error')` handler that checks for specific error codes (e.g., 'EADDRINUSE' for port in use) and provides more context to the user.