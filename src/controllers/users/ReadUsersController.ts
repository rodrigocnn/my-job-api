import { Request, Response } from "express";

import { container } from "tsyringe";
import { ReadUsersUseCase } from "@/modules/users/useCases/ReadUsersUseCase";

export class ReadUsersController {
  async handle(request: Request, response: Response) {
    try {
      const readUsersUseCase = container.resolve(ReadUsersUseCase);
      const users = await readUsersUseCase.execute();
      return response.status(201).send(users);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
