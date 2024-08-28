import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../repositories/ICompanyRepository";
import { Company } from "../model/Company";

@injectable()
export class ReadCompaniesUseCase {
  constructor(
    @inject("ICompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}
  public async execute(): Promise<Company[]> {
    const list = await this.companyRepository.read();
    return list;
  }
}
