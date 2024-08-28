import { Job } from "../model/Job";
import { IJobRepository } from "./IJobApplicationRepository";

export class InMemoryJobRepository implements IJobRepository {
  private jobs: Job[] = [];

  public create(jobDto: Job): void {
    const job = new Job(jobDto);
    this.jobs.push(job);
  }

  public async read(): Promise<Job[]> {
    return this.jobs;
  }

  public async update(id: string, job: Job): Promise<Job | null> {
    const existingJob = this.findById(id);
    if (!existingJob) {
      return null;
    }

    const updatedJob = new Job({
      ...existingJob,
      ...job,
    });

    this.jobs = this.jobs.map((Job) => (job.id === id ? updatedJob : job));

    return updatedJob;
  }

  delete(id: string): boolean {
    const existingJob = this.findById(id);
    if (!existingJob) {
      return false;
    }
    this.jobs = this.jobs.filter((jobs) => jobs.id !== id);
    return true;
  }

  async findById(id: string): Promise<Job | null> {
    const job = this.jobs.find((c) => c.id === id);
    return job || null;
  }
}
