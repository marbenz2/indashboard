import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  BarChart,
} from "@tremor/react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/CardUi";
import { monthlyIncome } from "../data/data";
import { MonthlyIncomeData } from "../types/types";
import { valueFormatter } from "../lib/utils";

type CustomTooltipProps = {
  payload?: any[];
  active?: boolean;
  label?: string | number;
};

type Entry = {
  date: string;
  [key: string]: number | string;
};

const calculateMonthlyAverage = (data: Entry[]): number => {
  if (!data || data.length === 0) return 0;

  const total = data.reduce((acc, entry) => {
    const valuesSum = Object.entries(entry).reduce((sum, [key, value]) => {
      if (key !== "date" && typeof value === "number") {
        return sum + value;
      }
      return sum;
    }, 0);
    return acc + valuesSum;
  }, 0);

  const uniqueMonths = new Set(
    data.map(({ date }) => date.slice(0, 3) + date.slice(-4))
  ).size;
  return total / uniqueMonths;
};

const getUsernames = (monthlyIncome: MonthlyIncomeData[]): string[] => {
  const usernames = monthlyIncome.flatMap(({ salary }) =>
    salary.map((user) => Object.keys(user)[0])
  );
  return Array.from(new Set(usernames));
};

const dataFormatter = (monthlyIncome: MonthlyIncomeData[]): Entry[] => {
  const sortedIncome = monthlyIncome.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const relevantIncome =
    sortedIncome.length > 12 ? sortedIncome.slice(-12) : sortedIncome;

  return relevantIncome.map(({ date, salary }) => {
    const displayDate = new Date(date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    const data = salary.reduce((acc, user) => {
      const username = Object.keys(user)[0];
      const userIncome = Object.values(user)[0] as number; // Assuming salary is always a number
      return { ...acc, [username]: userIncome };
    }, {});
    return { date: displayDate, ...data };
  });
};

const data = dataFormatter(monthlyIncome);

const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload, active }) => {
  if (!active || !payload) return null;

  return (
    <div className="w-56 space-y-4 rounded-tremor-default border border-tremor-border dark:border-dark-tremor-border bg-tremor-background dark:bg-dark-tremor-background p-2 text-tremor-default shadow-tremor-dropdown dark:shadow-dark-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content dark:text-dark-tremor-content">
              {category.dataKey}
            </p>
            <p className="font-medium text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
              {category.value.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MonthlyIncome = () => {
  return (
    <Accordion defaultOpen className="p-0 w-full">
      <AccordionHeader>
        <CardHeader className="text-start">
          <CardDescription>Monthly Income</CardDescription>
          <CardTitle>
            &#8960;{" "}
            {calculateMonthlyAverage(data).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </CardTitle>
        </CardHeader>
      </AccordionHeader>
      <AccordionBody>
        <CardContent>
          <BarChart
            className="mt-4 h-72"
            customTooltip={CustomTooltip}
            data={data}
            index="date"
            yAxisWidth={65}
            categories={getUsernames(monthlyIncome)}
            colors={["indigo", "cyan", "orange"]}
            valueFormatter={valueFormatter}
          />
        </CardContent>
      </AccordionBody>
    </Accordion>
  );
};

export default MonthlyIncome;
