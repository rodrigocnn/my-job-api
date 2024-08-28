import { inject, injectable } from "tsyringe";

import { CompanyDto } from "../dtos/CompanyDto";
import { ICompanyRepository } from "../repositories/ICompanyRepository";
import { Company } from "../model/Company";
import { companySchema } from "../validations";

@injectable()
export class UpdateCompanyUseCase {
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

    const existingCompany = await this.companyRepository.findById(
      dto.id as string
    );
    if (!existingCompany) {
      throw new Error("Company not found");
    }

    const updatedCompany = new Company({
      ...existingCompany,
      ...dto,
    });

    try {
      await this.companyRepository.update(dto.id as string, updatedCompany);
    } catch (error) {
      throw new Error(
        `Error updating company: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}
