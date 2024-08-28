import { Router } from "express";

import { usersRoutes } from "./usersRoutes";
import { companiesRoutes } from "./companiesRoutes";
import { jobsRoutes } from "./jobsRoutes";

export const router = Router();

router.use(usersRoutes);
router.use(companiesRoutes);
router.use(jobsRoutes);
