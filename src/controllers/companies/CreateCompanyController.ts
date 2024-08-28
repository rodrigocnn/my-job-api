import { Request, Response } from "express";

import { container } from "tsyringe";
import { CreateCompanyUseCase } from "@/modules/companies/useCases/CreateCompanyUseCase";

export class CreateCompanyController {
  async handle(request: Request, response: Response) {
    try {
      const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
      await createCompanyUseCase.execute({ ...request.body });
      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
