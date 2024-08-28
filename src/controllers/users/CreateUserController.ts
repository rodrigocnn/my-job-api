import { Request, Response } from "express";
import { CreateUserUseCase } from "@/modules/users/useCases/CreateUserUseCase";
import { container } from "tsyringe";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute({ ...request.body });
      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
