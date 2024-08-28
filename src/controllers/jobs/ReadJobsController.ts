import { ReadJobsUseCase } from "@/modules/jobs/useCases/ReadJobsUseCase";
import { Request, Response } from "express";

import { container } from "tsyringe";

export class ReadJobsController {
  async handle(request: Request, response: Response) {
    try {
      const readjobsUseCase = container.resolve(ReadJobsUseCase);
      const jobs = await readjobsUseCase.execute();
      return response.status(201).send(jobs);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
