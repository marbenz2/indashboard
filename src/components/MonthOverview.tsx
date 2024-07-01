import { useMemo } from "react";
import { Card } from "@tremor/react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/CardUi";
import { monthlyIncome, monthlyVariableExpenses } from "../data/data";
import { monthlyFixExpenses } from "../data/data";
import { MonthlyIncomeData } from "../types/types";

const calculateCurrentMonthSalary = (data: MonthlyIncomeData[]) => {
  return data.reduce((acc, value) => {
    const salary = value.salary.reduce((acc, value) => {
      return acc + Object.values(value)[0];
    }, 0);
    return acc + salary;
  }, 0);
};

const monthlyFixExpensesTotal = Object.values(monthlyFixExpenses).reduce(
  (acc, value) => acc + value,
  0
);

const monthlyValueExpensesTotal = Object.entries(
  monthlyVariableExpenses
).reduce((acc, [, values]) => {
  const sectionTotal = values.reduce(
    (acc, value) => acc + Object.values(value)[0],
    0
  );
  return acc + sectionTotal;
}, 0);

const monthlyExpensesTotal =
  monthlyFixExpensesTotal + monthlyValueExpensesTotal;

const MonthOverview = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const currentMonthSalary = useMemo(() => {
    const currentMonthData = monthlyIncome.filter(
      (data) =>
        data.date.getMonth() === currentMonth &&
        data.date.getFullYear() === currentYear
    );
    return calculateCurrentMonthSalary(currentMonthData);
  }, [currentMonth, currentYear]);

  return (
    <Card className="p-0">
      <CardHeader>
        <CardDescription>Übersicht</CardDescription>
        <CardTitle>
          {today.toLocaleString("default", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/*         Monat: {today.toLocaleString("default", { month: "long" })} */}
        <div className="flex flex-col sm:flex-row sm:w-full justify-between">
          <p className="text-tremor-title">
            Einnahmen:{" "}
            <span className="text-green-400">
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(currentMonthSalary)}
            </span>
          </p>
          <p className="text-tremor-title">
            Ausgaben:{" "}
            <span className="text-red-400">
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(monthlyExpensesTotal)}
            </span>
          </p>
          <p className="text-tremor-title">
            Total:{" "}
            <span
              className={`${
                (currentMonthSalary - monthlyFixExpensesTotal > 0 &&
                  "text-green-400") ||
                (currentMonthSalary - monthlyFixExpensesTotal < 0 &&
                  "text-red-400") ||
                ""
              }`}
            >
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(currentMonthSalary - monthlyExpensesTotal)}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthOverview;
