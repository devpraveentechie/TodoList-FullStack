import { Route, Routes } from "react-router-dom";
import { routes } from "../shared/routeObject";
import Users from "../components/Users";
import UserComponent from "../components/Users/UserComponent";
import TodoApp from "../components/Todo";

export const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path={routes.app.home} />
        <Route path={routes.app.users} Component={Users} />
        <Route path={routes.app.user} element={<UserComponent />} />
        <Route path={routes.app.todo} element={<TodoApp />} />
      </Routes>
    </>
  );
};
