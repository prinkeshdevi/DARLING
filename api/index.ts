import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dummy server since Vercel serverless doesn't provide a persistent HTTP server
const dummyServer = createServer(app);

let initialized = false;

export default async function handler(req: any, res: any) {
  if (!initialized) {
    await registerRoutes(dummyServer, app);
    initialized = true;
  }
  
  // Delegate the request to the Express app
  return app(req, res);
}