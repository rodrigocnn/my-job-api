import { container } from "tsyringe";

import { ICompanyRepository } from "@/modules/companies/repositories/ICompanyRepository";

import { IJobRepository } from "@/modules/jobs/repositories/IJobRepository";
import { InMemoryJobRepository } from "@/modules/jobs/repositories/InMemoryJobRepository";

import { IUserRepository } from "@/modules/users/repositories/IUserRepository";
import { PrismaUserRepository } from "@/modules/users/repositories/PrismaUserRepository";
import { PrismaCompanyRepository } from "@/modules/companies/repositories/PrismaCompanyRepository";

container.registerSingleton<IUserRepository>(
  "IUserRepository",
  PrismaUserRepository
);

container.registerSingleton<ICompanyRepository>(
  "ICompanyRepository",
  PrismaCompanyRepository
);

container.registerSingleton<IJobRepository>(
  "InMemoryJobRepository",
  InMemoryJobRepository
);
