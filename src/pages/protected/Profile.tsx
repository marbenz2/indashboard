import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useKindeAuth();
  return (
    <div className="flex flex-col w-full h-full items-center sm:items-start">
      {!isLoading && isAuthenticated && user && (
        <h2 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Hello, {user.given_name}
        </h2>
      )}
    </div>
  );
};

export default Profile;
