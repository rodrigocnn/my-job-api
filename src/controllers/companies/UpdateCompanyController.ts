import { UpdateCompanyUseCase } from "@/modules/companies/useCases/UpdateCompanyUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);
      await updateCompanyUseCase.execute(request.body);
      return response.status(200).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
