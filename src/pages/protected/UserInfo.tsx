import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const UserInfo = () => {
  const { user, isLoading, isAuthenticated } = useKindeAuth();
  return (
    <>
      {!isLoading && isAuthenticated && user && (
        <h2 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Hello, {user.given_name}
        </h2>
      )}
    </>
  );
};

export default UserInfo;
