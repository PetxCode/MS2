import express, { Application } from "express";
import cors from "cors";
import task from "./router/router";
import right from "./router/viewRouter";

export const mainApp = (app: Application) => {
  app
    .use(cors({ origin: "*" }))

    .use(express.json())
    .use("/api/auth", right)
    .use("/api/start-task", task);
};
