import { IUserRepository } from "@/modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("InMemoryUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("ID is required to delete a user.");
    }
    const result = await this.userRepository.delete(id);

    if (!result) {
      throw new Error("User not found");
    }
  }
}
