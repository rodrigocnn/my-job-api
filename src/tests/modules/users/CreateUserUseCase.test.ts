import { userMock } from "../../../modules/users/mocks";
import { InMemoryUserRepository } from "../../../modules/users/repositories/InMemoryUserRepository";
import { CreateUserUseCase } from "../../../modules/users/useCases/CreateUserUseCase";

test("Should to create a new user", () => {
  const userRepository = new InMemoryUserRepository();
  const registerUserUseCase = new CreateUserUseCase(userRepository);
  registerUserUseCase.execute(userMock);
  expect(userMock.name).toBe("Alice");
});
