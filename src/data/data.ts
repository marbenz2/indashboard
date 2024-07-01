import {
  MonthlyFixExpensesData,
  MonthlyIncomeData,
  MonthlyVariableExpensesData,
} from "../types/types";

export const monthlyIncome: MonthlyIncomeData[] = [
  {
    date: new Date("2023-04-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-05-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-06-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-07-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-08-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-09-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-10-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-11-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2023-12-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-01-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-02-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-03-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-04-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-05-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-06-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
  {
    date: new Date("2024-07-01"),
    salary: [
      { "Benutzer 1": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
      { "Benutzer 2": Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500 },
    ],
  },
];

export const monthlyFixExpenses: MonthlyFixExpensesData = {
  netflix: 12.99,
  spotify: 9.99,
  amazon: 8.99,
  internet: 29.99,
  electricity: 45.99,
  mobile: 19.99,
  rent: 1200,
};

export const monthlyVariableExpenses: MonthlyVariableExpensesData = {
  einkauf: [{ Lebensmittel: 200 }, { Kleidung: 100 }, { Haushalt: 50 }],
  auto: [{ Versicherung: 100 }, { Benzin: 150 }],
  freizeit: [{ Kino: 20 }, { Restaurant: 50 }],
  gesundheit: [{ Arzt: 50 }, { Apotheke: 20 }],
  haustier: [{ Futter: 20 }, { Spielzeug: 10 }],
  urlaub: [{ Hotel: 100 }, { Flug: 200 }],
  sonstiges: [{ Sonstiges: 50 }],
};
