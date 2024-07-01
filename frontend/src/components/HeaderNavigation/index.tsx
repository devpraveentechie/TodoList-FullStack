import { Link } from "react-router-dom";
import { routes } from "../../shared/routeObject";

const HeaderNavigation = () => {
  return (
    <>
      <nav>
        <ul className="inline">
          <li className="inline-block p-10">
            <Link to={routes.app.home} key="home">
              Home
            </Link>
          </li>
          <li className="inline-block p-10">
            <Link to={routes.app.users} key="users">
              Users
            </Link>
          </li>
          <li className="inline-block p-10">
            <Link to={routes.app.todo} key="todo">
              Todos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavigation;
