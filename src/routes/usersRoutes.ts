import { Router } from "express";
import { CreateUserController } from "@/controllers/users/CreateUserController";
import { DeleteUserController } from "@/controllers/users/DeleteUserController";
import { ReadUsersController } from "@/controllers/users/ReadUsersController";
import { UpdateUserController } from "@/controllers/users/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUsersController = new ReadUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.delete("/users/:userId", (request, response) => {
  return deleteUserController.handle(request, response);
});

usersRoutes.get("/users", (request, response) => {
  return readUsersController.handle(request, response);
});

usersRoutes.put("/users", (request, response) => {
  return updateUserController.handle(request, response);
});

export { usersRoutes };
