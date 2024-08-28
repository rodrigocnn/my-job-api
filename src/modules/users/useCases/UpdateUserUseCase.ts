import { User } from "@/modules/users/model/User";
import { IUserRepository } from "@/modules/users/repositories/IUserRepository";
import { userUpdateSchema } from "@/modules/users/validations";
import { IUserDTO } from "../dtos/IUserDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}
  public async execute(dto: IUserDTO): Promise<void> {
    try {
      await userUpdateSchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }
    const user = new User(dto);
    await this.userRepository.update(dto.id as string, user);
  }
}
