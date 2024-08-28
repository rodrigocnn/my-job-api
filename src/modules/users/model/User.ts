import { IUserDTO } from "../dtos/IUserDTO";

export class User {
  id?: string;
  name: string;
  email: string;
  password?: string;

  constructor(userDTO: IUserDTO) {
    this.name = userDTO.name;
    this.email = userDTO.email;
    this.password = userDTO.password;
  }

  private generateRandomId(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
