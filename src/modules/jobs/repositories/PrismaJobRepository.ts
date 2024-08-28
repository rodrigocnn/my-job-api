import { prisma } from "../../../database/prismaClient";
import { IJobDTO } from "../dtos/IJobDTO";
import { IJobRepository } from "./IJobRepository";

export class PrismaJobRepository implements IJobRepository {
  async create(job: IJobDTO) {
    await prisma.job.create({ data: job });
  }

  async read(): Promise<IJobDTO[]> {
    const jobs = (await prisma.job.findMany({
      select: {
        id: true,
        description: true,
        seniority: true,
        workRegime: true,
        typeJob: true,
      },
    })) as IJobDTO[];

    return jobs;
  }

  async update(id: string, job: IJobDTO): Promise<IJobDTO> {
    const result = await prisma.job.update({
      where: {
        id: id,
      },
      data: {
        description: job.description,
        seniority: job.seniority,
        workRegime: job.workRegime,
        typeJob: job.typeJob,
      },
    });

    const jobUpdate = {
      description: result.description,
      seniority: result.seniority,
      workRegime: result.workRegime,
      typeJob: result.typeJob,
      companyId: result.companyId,
    };

    return jobUpdate;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.job.delete({
      where: {
        id: id,
      },
    });

    return result ? true : false;
  }

  async findById(id: string): Promise<IJobDTO | null> {
    const job = await prisma.job.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return job;
  }
}
