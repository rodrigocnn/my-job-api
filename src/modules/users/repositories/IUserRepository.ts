import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { IUserDTO } from "../dtos/IUserDTO";
import { UserResponseDto } from "../dtos/UserResponseDto";
import { User } from "../model/User";

export interface IUserRepository {
  create(user: ICreateUserDTO): void;
  read(): Promise<UserResponseDto[]>;
  update(id: string, user: IUserDTO): Promise<UserResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
