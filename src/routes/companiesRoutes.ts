import { Router } from "express";

import { CreateCompanyController } from "@/controllers/companies/CreateCompanyController";
import { DeleteCompanyController } from "@/controllers/companies/DeleteCompanyController";
import { ReadCompaniesController } from "@/controllers/companies/ReadCompaniesController";
import { UpdateCompanyController } from "@/controllers/companies/UpdateCompanyController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const readCompaniesController = new ReadCompaniesController();
const updateCompanyController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();

companiesRoutes.post("/companies", (request, response) => {
  return createCompanyController.handle(request, response);
});

companiesRoutes.delete("/companies/:companyId", (request, response) => {
  return deleteCompanyController.handle(request, response);
});

companiesRoutes.get("/companies", (request, response) => {
  return readCompaniesController.handle(request, response);
});

companiesRoutes.put("/companies/", (request, response) => {
  return updateCompanyController.handle(request, response);
});

export { companiesRoutes };
