import { Request, Response } from "express";

import { container } from "tsyringe";
import { ReadCompaniesUseCase } from "@/modules/companies/useCases/ReadCompaniesUseCase";

export class ReadCompaniesController {
  async handle(request: Request, response: Response) {
    try {
      const readCompaniesUseCase = container.resolve(ReadCompaniesUseCase);
      const companies = await readCompaniesUseCase.execute();
      console.log("Lista", companies);
      return response.status(201).send(companies);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
