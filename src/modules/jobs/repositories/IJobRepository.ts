import { IJobDTO } from "../dtos/IJobDTO";
import { Job } from "../model/Job";

export interface IJobRepository {
  create(job: IJobDTO): void;
  read(): Promise<IJobDTO[]>;
  update(id: string, company: any): Promise<IJobDTO>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<IJobDTO | null>;
}
