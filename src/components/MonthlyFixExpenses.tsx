import { Card, List, ListItem } from "@tremor/react";
import { Accordion, AccordionBody, AccordionHeader } from "@tremor/react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/CardUi";
import { monthlyFixExpenses } from "../data/data";
import { capitalizeFirstLetter } from "../lib/utils";

const MonthlyFixExpenses = () => {
  return (
    <Accordion className="p-0 w-full lg:max-w-lg h-fit">
      <AccordionHeader>
        <CardHeader className="text-start">
          <CardDescription>Fix Monthly Expenses</CardDescription>
          <CardTitle>
            {Object.values(monthlyFixExpenses)
              .reduce((acc, entry) => acc + entry, 0)
              .toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
          </CardTitle>
        </CardHeader>
      </AccordionHeader>
      <AccordionBody>
        <CardContent>
          <Card>
            <List>
              {Object.entries(monthlyFixExpenses).map(([key, value], id) => (
                <ListItem key={key + id}>
                  <p>{capitalizeFirstLetter(key)}</p>
                  <p>
                    {value.toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </p>
                </ListItem>
              ))}
            </List>
          </Card>
        </CardContent>
      </AccordionBody>
    </Accordion>
  );
};

export default MonthlyFixExpenses;
