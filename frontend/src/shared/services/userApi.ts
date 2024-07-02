import { UserFormType } from "../../types/user";
const baseUrl: string = "http://localhost:4000/users";

export const getUsers = async () => {
  const response = await fetch(`${baseUrl}`);
  const users = response.json();
  return users;
};

export const getUser = async (id: string) => {
  const user = await fetch(`${baseUrl}/${id}`);
  return user.json();
};

export const addUser = async (userData: UserFormType) => {
  try {
    const postData = await fetch(`${baseUrl}`, {
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

export const deleteUser = async (id: string) => {
  try {
    const deleteData = await fetch(`${baseUrl}/${id}`, {
      method: "delete",
    });
    console.log(deleteData.json());
  } catch (error) {
    console.log("error", error);
  }
};
