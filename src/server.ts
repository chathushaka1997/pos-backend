/// <reference path="global.d.ts" />
import dotenv from "dotenv";
import express from "express";
import databaseSetup from "./startup/database";
import { initRoutes } from "./routes";
import { ResponseHandler } from "./middleware/response-handler";
import { Authentication } from "./middleware/authntication";
import passportStartup from "./startup/passport";
import cors from "cors";

dotenv.config();

const PORT: any = process.env.PORT || 3016;

databaseSetup();
const app = express();

app.use(ResponseHandler);

app.use(express.json());
app.use(express.urlencoded({ limit: "20mb", extended: true }));
passportStartup(app);
app.use(
  cors({
    optionsSuccessStatus: 200,
    origin: "*",
    allowedHeaders: ["Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-Requested-With", "Cache-Control"],
  })
);
app.use("/api/auth", Authentication.verifyToken);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

initRoutes(app);
app.all("*", (req, res, next) => {
  res.sendError("Route not found", 404);
});
