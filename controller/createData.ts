import { Request, Response } from "express";
import { dataEntity } from "../model/dataEntity";

export const createTask = async (req: any, res: Response) => {
  try {
    if (req.user.verified) {
      const { title } = req.body;
      console.log("Just testing");
      const task = await dataEntity.create({ title }).save();

      res.status(201).json({
        message: "created",
        data: task,
      });
    } else {
      res.status(404).json({ message: "you haven't beeen verified" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const task = await dataEntity.find();

    res.status(200).json({
      message: "created",
      data: task,
    });
  } catch (error) {
    console.log(error);
  }
};
