import { JobApplication } from "../model/Job";

export interface IJobApplicationRepository {
  create(job: JobApplication): void;
  read(): Promise<JobApplication[]>;
  update(id: string, company: any): Promise<JobApplication | null>;
  delete(id: string): boolean;
  findById(id: string): Promise<JobApplication | null>;
}
