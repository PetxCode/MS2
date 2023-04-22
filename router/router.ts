import express, { Router } from "express";
import { createTask, viewTask } from "../controller/createData";
import { viewAuth, viewTestAuth } from "../controller/viewRight";
import { authMid } from "../utils/authMiddleWare";

const router: Router = express.Router();

router.route("/create").post(authMid, createTask);

router.route("/").get(viewTask);
router.route("/auth-now").get(viewAuth);
router.route("/authing").get(viewTestAuth);

export default router;
