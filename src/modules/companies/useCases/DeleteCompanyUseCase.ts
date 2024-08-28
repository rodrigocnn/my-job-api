import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../repositories/ICompanyRepository";

@injectable()
export class DeleteCompanyUseCase {
  constructor(
    @inject("ICompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("ID is required to delete a user.");
    }
    const result = await this.companyRepository.delete(id);

    if (!result) {
      throw new Error("User not found");
    }
  }
}
