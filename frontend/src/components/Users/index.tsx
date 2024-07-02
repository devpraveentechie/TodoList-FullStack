import { User } from "../../types/user";
import UserComponent from "./UserComponent";
import "./style.css";
import { useEffect, useState } from "react";
import { getUsers } from "../../shared/services/userApi";
import UserForm from "./UserForm";

const Users = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    const getUserData = async () => {
      const usersData = await getUsers();
      setUsers(usersData?.users);
    };
    if (!users || users?.length === 0) {
      getUserData();
    }
  }, []);
  return (
    <div className="wrapper">
      <UserForm />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black">
        User List
      </h1>
      <div className="tableHeader">
        <div className="cell">
          <span>Id</span>
        </div>
        <div className="cell">
          <span>User Name</span>
        </div>
        <div className="cell">
          <span>Birth Date</span>
        </div>
        <div className="cell">
          <span>Country</span>
        </div>
        <div className="cell">
          <span>Actions</span>
        </div>
      </div>
      <div className="tableBody">
        {users?.map((user) => (
          <UserComponent user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
