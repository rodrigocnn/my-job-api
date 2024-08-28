import { inject, injectable } from "tsyringe";

import { jobSchema } from "../validations";
import { Job } from "../model/Job";
import { IJobRepository } from "../repositories/IJobRepository";

@injectable()
export class UpdateJobUseCase {
  constructor(
    @inject("InMemoryJobRepository")
    private jobRepository: IJobRepository
  ) {}

  public async execute(id: string, dto: Job): Promise<void> {
    try {
      await jobSchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }

    const existinJob = await this.jobRepository.findById(id);
    if (!existinJob) {
      throw new Error("Job not found");
    }

    const updatedJob = new Job({
      ...existinJob,
      ...dto,
    });

    try {
      await this.jobRepository.update(id, updatedJob);
    } catch (error) {
      throw new Error(
        `Error updating job: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}
