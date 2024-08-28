import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "@/modules/users/useCases/DeleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.userId;
      const deleteUserUseCase = container.resolve(DeleteUserUseCase);
      await deleteUserUseCase.execute(id);
      return response.status(201).send({ success: true });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
