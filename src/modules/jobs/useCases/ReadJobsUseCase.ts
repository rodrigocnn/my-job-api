import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../repositories/IJobRepository";
import { Job } from "../model/Job";

@injectable()
export class ReadJobsUseCase {
  constructor(
    @inject("InMemoryJobRepository")
    private jobRepository: IJobRepository
  ) {}
  public async execute(): Promise<Job[]> {
    const list = await this.jobRepository.read();
    return list;
  }
}
