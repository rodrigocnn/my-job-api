import { CompanyDto } from "../dtos/CompanyDto";
import { Company } from "../model/Company";
import { ICompanyRepository } from "./ICompanyRepository";

export class InMemoryCompanyRepository implements ICompanyRepository {
  private companies: Company[] = [];

  public create(companyDto: CompanyDto): void {
    const company = new Company(companyDto);
    this.companies.push(company);
  }

  public async read(): Promise<Company[]> {
    return this.companies;
  }

  public async update(id: string, company: Company): Promise<Company | null> {
    const existingCompany = this.findById(id);
    if (!existingCompany) {
      return null;
    }

    const updatedCompany = new Company({
      ...existingCompany,
      ...company,
    });

    this.companies = this.companies.map((company) =>
      company.id === id ? updatedCompany : company
    );

    return updatedCompany;
  }

  delete(id: string): boolean {
    const existingCompany = this.findById(id);
    if (!existingCompany) {
      return false;
    }
    this.companies = this.companies.filter((companies) => companies.id !== id);
    return true;
  }

  async findById(id: string): Promise<Company | null> {
    const company = this.companies.find((c) => c.id === id);
    return company || null;
  }
}
