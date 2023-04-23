import { Request, Response } from "express";
import { rightEntity } from "../model/rightModel";
import { authEntity } from "../model/authModel";
import { authTestEntity } from "../model/authTestModel";

export const viewRight = async (req: Request, res: Response) => {
  try {
    const view = await rightEntity.find();

    res.status(200).json({
      message: "new view",
      data: view,
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewAuth = async (req: Request, res: Response) => {
  try {
    const view = await authEntity.find();
    res.status(200).json({
      message: "view-auth data",
      length: view.length,
      data: view,
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewTestAuth = async (req: Request, res: Response) => {
  try {
    const view = await authTestEntity.find();
    res.status(200).json({
      message: "view-auth data",
      length: view.length,
      data: view,
    });
  } catch (error) {
    console.log(error);
  }
};
