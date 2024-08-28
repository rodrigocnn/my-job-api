import { generateRandomId } from "@/shared/utils/generateRandomId";

export class Job {
  id?: string;
  description: string;
  seniority: string;
  workRegime: string;
  typeJob: string;
  companyId: string;

  constructor(job: Job) {
    this.description = job.description;
    this.seniority = job.seniority;
    this.workRegime = job.workRegime;
    this.typeJob = job.typeJob;
    this.companyId = job.companyId;
  }
}
