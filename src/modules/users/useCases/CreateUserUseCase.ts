import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@/modules/users/dtos/ICreateUserDTO";
import { User } from "@/modules/users/model/User";
import { IUserRepository } from "@/modules/users/repositories/IUserRepository";
import { userSchema } from "@/modules/users/validations";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(dto: ICreateUserDTO): Promise<void> {
    try {
      await userSchema.validate(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Validation error: ${error.message}`);
      } else {
        throw new Error("Unknown validation error");
      }
    }
    const user = new User(dto) as ICreateUserDTO;
    await this.userRepository.create(user);
  }
}
