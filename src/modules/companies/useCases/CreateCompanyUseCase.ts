import { inject, injectable } from "tsyringe";

import { CompanyDto } from "../dtos/CompanyDto";
import { ICompanyRepository } from "../repositories/ICompanyRepository";
import { Company } from "../model/Company";
import { companySchema } from "../validations";

@injectable()
export class CreateCompanyUseCase {
  constructor(
    @inject("ICompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  public async execute(dto: CompanyDto): Promise<void> {
    try {
      await companySchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }
    const company = new Company(dto);
    await this.companyRepository.create(company);
  }
}
