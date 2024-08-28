import { inject, injectable } from "tsyringe";

import { IJobApplicationRepository } from "../repositories/IJobApplicationRepository";
import { JobApplication } from "../model/Job";
import { jobSchema } from "../validations";

@injectable()
export class CreateJobUseCase {
  constructor(
    @inject("InMemoryJobRepository")
    private jobApplicationRepository: IJobApplicationRepository
  ) {}

  public async execute(dto: JobApplication): Promise<void> {
    try {
      await jobSchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }
    const job = new JobApplication(dto);
    await this.jobApplicationRepository.create(job);
  }
}
