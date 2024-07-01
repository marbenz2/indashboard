import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Spinner from "../../components/ui/Spinner";
import { Button } from "@tremor/react";
import MonthlyIncome from "../../components/MonthlyIncome";
import MonthlyFixExpenses from "../../components/MonthlyFixExpenses";
import MonthOverview from "../../components/MonthOverview";
import MonthlyVariableExpenses from "../../components/MonthlyVariableExpenses";

const Dashboard = () => {
  const { login, isLoading, isAuthenticated } = useKindeAuth();

  return (
    <div className="flex flex-col w-full">
      {!isLoading && isAuthenticated && (
        <div className="flex flex-col gap-4">
          <MonthOverview />
          <MonthlyIncome />
          <div className="flex flex-col lg:flex-row gap-4">
            <MonthlyFixExpenses />
            <MonthlyVariableExpenses />
          </div>
        </div>
      )}
      {!isLoading && !isAuthenticated && (
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
