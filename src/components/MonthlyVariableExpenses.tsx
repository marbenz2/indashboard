import { List, ListItem } from "@tremor/react";
import { Accordion, AccordionBody, AccordionHeader } from "@tremor/react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/CardUi";
import { monthlyVariableExpenses } from "../data/data";
import { capitalizeFirstLetter } from "../lib/utils";

const expenses = Object.entries(monthlyVariableExpenses).map(
  ([section, value]) => {
    return { section, value };
  }
);

const monthlyValueExpensesTotal = expenses.reduce((acc, value) => {
  const sectionTotal = value.value.reduce((acc, value) => {
    return acc + Object.values(value)[0];
  }, 0);
  return acc + sectionTotal;
}, 0);

const MonthlyVariableExpenses = () => {
  return (
    <Accordion className="p-0 w-full h-fit">
      <AccordionHeader>
        <CardHeader className="text-start">
          <CardDescription>Varibale Monthly Expenses</CardDescription>
          <CardTitle>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(monthlyValueExpensesTotal)}
          </CardTitle>
        </CardHeader>
      </AccordionHeader>
      <AccordionBody>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
          {expenses.map((expense, index) => (
            <Accordion className="w-full h-fit" key={expense.section + index}>
              <AccordionHeader>
                <div className="text-start">
                  <p className="text-xl">
                    {capitalizeFirstLetter(expense.section)}
                  </p>
                  <p className="font-bold">
                    Total:{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(
                      expense.value.reduce((acc, entry) => {
                        return acc + Object.values(entry)[0];
                      }, 0)
                    )}
                  </p>
                </div>
              </AccordionHeader>
              <List key={expense.section}>
                <AccordionBody>
                  {expense.value.map((entry, entryIndex) => {
                    const [key, value] = Object.entries(entry)[0];
                    return (
                      <ListItem key={key + entryIndex}>
                        <p>{capitalizeFirstLetter(key)}</p>
                        <p>
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "EUR",
                          }).format(value)}
                        </p>
                      </ListItem>
                    );
                  })}
                </AccordionBody>
              </List>
            </Accordion>
          ))}
        </CardContent>
      </AccordionBody>
    </Accordion>
  );
};

export default MonthlyVariableExpenses;
