import { CompanyDto } from "../dtos/CompanyDto";
import { Company } from "../model/Company";

export interface ICompanyRepository {
  create(company: CompanyDto): void;
  read(): Promise<Company[]>;
  update(id: string, company: any): Promise<Company | null>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<Company | null>;
}
