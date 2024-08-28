import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../repositories/IJobRepository";

@injectable()
export class DeleteJobUseCase {
  constructor(
    @inject("InMemoryJobRepository")
    private jobRepository: IJobRepository
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("ID is required to delete a job.");
    }
    const result = await this.jobRepository.delete(id);

    if (!result) {
      throw new Error("User not found");
    }
  }
}
