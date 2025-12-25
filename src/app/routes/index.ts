import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";

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
];

excludingModule.forEach((x) => rootRouter.use(x.path, x.element));
