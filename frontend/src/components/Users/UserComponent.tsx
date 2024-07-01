import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../../shared/services/userApi";
import { User } from "../../types/user";
import "./style.css";
interface UserProps {
  user?: User;
}
const UserComponent = ({ user }: UserProps) => {
  const [userdata, setUserData] = useState<User | undefined>(user);
  const { id } = useParams();
  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser(Number(id));
      setUserData(user.user);
    };
    if (!userdata) {
      getUserData();
    }
  }, [userdata]);
  return (
    <>
      <div className="row">
        <div className="cell">
          {user ? (
            <Link to={`/users/${userdata?.id}`}>{userdata?.id}</Link>
          ) : (
            <span>{userdata?.id}</span>
          )}
        </div>
        <div className="cell">
          <span>{userdata?.name}</span>
        </div>
        <div className="cell">
          <span>{userdata?.birthdate}</span>
        </div>
        <div className="cell">
          <span>{userdata?.country}</span>
        </div>
        <div className="cell">
          <button
            onClick={async (event) => {
              event.preventDefault();
              await deleteUser(userdata!.id);
            }}
          >
            Delete User
          </button>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
