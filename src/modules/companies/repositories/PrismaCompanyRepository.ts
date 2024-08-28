import { prisma } from "../../../database/prismaClient";
import { CompanyDto } from "../dtos/CompanyDto";
import { Company } from "../model/Company";
import { ICompanyRepository } from "./ICompanyRepository";

export class PrismaCompanyRepository implements ICompanyRepository {
  async create(company: CompanyDto) {
    await prisma.company.create({ data: company });
  }

  async read(): Promise<CompanyDto[]> {
    const companies = (await prisma.company.findMany({
      select: {
        id: true,
        name: true,
        size: true,
        website: true,
        linkedin: true,
      },
    })) as CompanyDto[];

    return companies;
  }

  async update(id: string, company: CompanyDto): Promise<CompanyDto | null> {
    const result = await prisma.company.update({
      where: {
        id: id,
      },
      data: {
        name: company.name,
        size: company.size,
        website: company.website,
        linkedin: company.linkedin,
      },
    });

    const companyUpdate = {
      description: result.description,
      name: result.name,
      size: result.size,
      website: result.website,
      linkedin: result.linkedin,
    };

    return companyUpdate;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return result ? true : false;
  }

  async findById(id: string): Promise<Company | null> {
    const company = await prisma.company.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return company;
  }
}
