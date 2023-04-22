import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authTestEntity } from "../model/authTestModel";

export const authMid = async (req: any, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (authToken) {
    const token = authToken.split(" ")[1];
      const newToken = await authTestEntity.findOne({ where: { token } });
      
    if (newToken) {
      jwt.verify(
        token,
        "This is THE SectRE",
        (err: Error, payload: string | jwt.JwtPayload) => {
          if (err) {
            throw err;
          } else {
            req.user = payload;
            next();
          }
        },
      );
    } else {
      res.status(404).json({ message: "Wrong Auth Token" });
    }
  } else {
    res.status(404).json({ message: "You don't have right for this..." });
  }
};
