import { require } from 'express';

const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('backend/data/db.json');
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

// Set up auth middleware
server.use(middlewares);
server.use(auth);

// Add custom routes
server.use(jsonServer.rewriter(require('backend/data/routes.json')));

// Use default router
server.use(router);

// Start server
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});