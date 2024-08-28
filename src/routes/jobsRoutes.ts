import { Router } from "express";

import { UpdateCompanyController } from "@/controllers/companies/UpdateCompanyController";
import { DeleteCompanyController } from "@/controllers/companies/DeleteCompanyController";
import { CreateJobController } from "@/controllers/jobs/CreateJobController";
import { ReadJobsController } from "@/controllers/jobs/ReadJobsController";

const jobsRoutes = Router();

const createCompanyController = new CreateJobController();
const readJobsController = new ReadJobsController();
const updateJobController = new UpdateCompanyController();
const deleteJobController = new DeleteCompanyController();

jobsRoutes.post("/jobs", (request, response) => {
  return createCompanyController.handle(request, response);
});

jobsRoutes.delete("/jobs/:id", (request, response) => {
  return deleteJobController.handle(request, response);
});

jobsRoutes.get("/jobs", (request, response) => {
  return readJobsController.handle(request, response);
});

jobsRoutes.put("/jobs/:id", (request, response) => {
  return updateJobController.handle(request, response);
});

export { jobsRoutes };
