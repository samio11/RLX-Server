import express from "express";
import { analysisController } from "./analysis.controller";

import { ERole } from "../user/user.interface";
import { checkAuth } from "../../middlewares/checkAuth";

const router = express.Router();

router.get("/", checkAuth([ERole.admin]), analysisController.getAdminAnalysis);

export const AdminRoutes = router;
