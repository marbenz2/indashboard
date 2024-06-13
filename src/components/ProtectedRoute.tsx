import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Button } from "@tremor/react";
import { Outlet } from "react-router-dom";
import Spinner from "./ui/Spinner";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, login } = useKindeAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Nothing to see here...
          </h1>
          <p>You are not authenticated</p>
        </div>
        <Button onClick={() => login()} type="button" className="w-fit">
          Log In
        </Button>
      </div>
    );
  }

  if (!isLoading && isAuthenticated) {
    return <Outlet />;
  }
};

export default ProtectedRoute;
