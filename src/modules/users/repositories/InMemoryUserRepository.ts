// import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
// import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
// import { User } from "../model/User";
// import { IUserRepository } from "./IUserRepository";

// export class InMemoryUserRepository implements IUserRepository {
//   private users: User[] = [];

//   public create(userDTO: ICreateUserDTO): void {
//     const user = new User(userDTO);
//     this.users.push(user);
//   }

//   public read(): User[] {
//     return this.users;
//   }

//   public async update(
//     id: string,
//     userDTO: IUpdateUserDTO
//   ): Promise<User | null> {
//     const existingUser = this.findById(id);
//     if (!existingUser) {
//       return null;
//     }

//     const updatedUser = new User({
//       ...existingUser,
//       ...userDTO,
//     });

//     this.users = this.users.map((user) =>
//       user.id === id ? updatedUser : user
//     );

//     return updatedUser;
//   }

//   delete(id: string): boolean {
//     const existingUser = this.findById(id);
//     if (!existingUser) {
//       return false;
//     }
//     this.users = this.users.filter((user) => user.id !== id);
//     return true;
//   }

//   public findById(id: string): User | undefined {
//     return this.users.find((user) => user.id === id);
//   }
// }
