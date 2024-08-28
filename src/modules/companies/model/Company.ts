import { generateRandomId } from "@/shared/utils/generateRandomId";

export class Company {
  id?: string;
  name: string;
  size: string;
  website: string;
  linkedin: string;
  description: string;

  constructor(company: any) {
    this.name = company.name;
    this.size = company.size;
    this.website = company.website;
    this.linkedin = company.linkedin;
    this.description = company.description;
  }
}
