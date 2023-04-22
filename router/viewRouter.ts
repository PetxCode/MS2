import express, { Router } from "express";
import { viewAuth, viewTestAuth } from "../controller/viewRight";

const router: Router = express.Router();

router.route("/auth").get(viewAuth);
router.route("/authing").get(viewTestAuth);

export default router;
