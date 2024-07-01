export type Links = {
  name: string;
  to: string;
  icon: React.ComponentType;
}[];

export interface MonthlyIncomeData {
  date: Date;
  salary: Record<string, number>[];
}

export type MonthlyFixExpensesData = {
  [key: string]: number;
};

type ExpenseCategory = {
  [key: string]: number;
};

export type MonthlyVariableExpensesData = {
  [category: string]: ExpenseCategory[];
};
