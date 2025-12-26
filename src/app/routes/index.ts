import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { AdminRoutes } from "../modules/analysis/analysis.routes";

export const rootRouter = Router();

const excludingModule = [
  {
    path: "/user",
    element: userRoutes,
  },
  {
    path: "/auth",
    element: authRoutes,
  },
  {
    path: "/analysis",
    element: AdminRoutes,
  },
];

excludingModule.forEach((x) => rootRouter.use(x.path, x.element));
