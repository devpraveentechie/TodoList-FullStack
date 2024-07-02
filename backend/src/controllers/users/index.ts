import { Request, Response } from "express";
import { User } from "../../types/user";
import UserModal from "../../models/user";
import { randomUUID } from "crypto";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users: User[] = await UserModal.find();
  res.status(200).json({ users });
};

// GET - users/:id
const getUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const user: User | null = await UserModal.findById(id);
  res.status(200).json({ user });
};
// POST - users
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req?.body as Pick<User, "name" | "birthdate" | "country">;
    const users = await UserModal.find({});
    const duplicateUsers = users.find(
      (user) => user?.name?.toLowerCase() === req.body.name.toLowerCase()
    );
    if (duplicateUsers) {
      res.status(400).json({
        message: "User name already exists",
        todo: { name: "", birthdate: "", coutry: "" },
        todos: users,
      });
    } else {
      const user: User = new UserModal({
        id: randomUUID(),
        name: body?.name,
        birthdate: body.birthdate,
        country: body.country,
      });

      const newUser: User = await user.save();
      const allUsers: User[] = await UserModal.find();
      res
        .status(201)
        .json({ message: "User added", user: newUser, users: allUsers });
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
// DELETE - users
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const deletedUser: User | null = await UserModal.findByIdAndRemove(
      req.params.id
    );
    const allUsers: User[] = await UserModal.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedUser,
      todos: allUsers,
    });
  } catch (error) {
    throw error;
  }
};

export { getUsers, getUser, createUser, deleteUser };
