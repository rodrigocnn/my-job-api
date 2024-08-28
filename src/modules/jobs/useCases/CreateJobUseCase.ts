import { inject, injectable } from "tsyringe";

import { IJobRepository } from "../repositories/IJobRepository";
import { Job } from "../model/Job";
import { jobSchema } from "../validations";

@injectable()
export class CreateJobUseCase {
  constructor(
    @inject("InMemoryJobRepository")
    private jobRepository: IJobRepository
  ) {}

  public async execute(dto: Job): Promise<void> {
    try {
      await jobSchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }
    const job = new Job(dto);
    await this.jobRepository.create(job);
  }
}
