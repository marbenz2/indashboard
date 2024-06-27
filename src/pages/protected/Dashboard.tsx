import CardDashboard from "../../components/ui/CardDashboard";
import AreaChartUi from "../../components/ui/AreaChartUi";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Spinner from "../../components/ui/Spinner";
import { Button } from "@tremor/react";

const Dashboard = () => {
  const { login, user, isLoading, isAuthenticated } = useKindeAuth();

  return (
    <div className="flex flex-col w-full">
      {user && !isLoading && isAuthenticated && (
        <div>
          <CardDashboard>
            <AreaChartUi />
          </CardDashboard>
        </div>
      )}
      {!user && !isLoading && !isAuthenticated && (
        <div className="flex w-full h-full items-center justify-center flex-col gap-4">
          <h2 className="text-tremor-title">
            Please log in to your account to see your Dashboard.
          </h2>
          <Button
            size="md"
            color="orange"
            variant="secondary"
            onClick={() => login()}
          >
            Log in
          </Button>
        </div>
      )}
      {isLoading && (
        <div className="flex w-full h-full items-center justify-center flex-col gap-4">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
