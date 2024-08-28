import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateJobUseCase } from "@/modules/jobs/useCases/CreateJobUseCase";

export class CreateJobController {
  async handle(request: Request, response: Response) {
    try {
      const createJobUseCase = container.resolve(CreateJobUseCase);
      await createJobUseCase.execute({ ...request.body });
      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
