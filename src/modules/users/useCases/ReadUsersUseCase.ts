import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../repositories/IUserRepository";
import { UserResponseDto } from "../dtos/UserResponseDto";

@injectable()
export class ReadUsersUseCase {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<UserResponseDto[]> {
    const list = await this.userRepository.read();
    return list;
  }
}
