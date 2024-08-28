import { generateRandomId } from "@/shared/utils/generateRandomId";

export class JobApplication {
  id?: string;
  status: string;

  constructor(jobApplication: JobApplication) {
    this.id = jobApplication.id || String(generateRandomId(1, 100));
    this.status = jobApplication.status;
  }
}
