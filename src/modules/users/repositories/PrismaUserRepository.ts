import { prisma } from "../../../database/prismaClient";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { UserResponseDto } from "../dtos/UserResponseDto";
import { IUserRepository } from "./IUserRepository";

export class PrismaUserRepository implements IUserRepository {
  async create(user: ICreateUserDTO) {
    await prisma.user.create({ data: user });
  }

  async read(): Promise<UserResponseDto[]> {
    const users = (await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    })) as UserResponseDto[];

    return users;
  }

  async update(
    id: string,
    user: ICreateUserDTO
  ): Promise<UserResponseDto | null> {
    const result = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
        email: user.email,
      },
    });

    const userUpdate = {
      id: result.id,
      name: result.name,
      email: result.email,
    };

    return userUpdate;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return result ? true : false;
  }
}
