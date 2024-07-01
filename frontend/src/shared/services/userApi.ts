import { UserFormType } from "../../types/user";

export const getUsers = async () => {
  const response = await fetch("/users");
  const users = response.json();
  return users;
};

export const getUser = async (id: number) => {
  const user = await fetch(`/users/${id}`);
  return user.json();
};

export const addUser = async (userData: UserFormType) => {
  try {
    const postData = await fetch(`/users`, {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(postData.json());
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const deleteData = await fetch(`/users/${id}`, {
      method: "delete",
    });
    console.log(deleteData.json());
  } catch (error) {
    console.log("error", error);
  }
};
