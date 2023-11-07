"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ExpenseForm from "@/components/ExpenseForm/ExpenseForm";
import Expenses from "@/components/Expenses/Expenses";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [expenseFormdata, setExpenseFormData] = useState({
    expenseTitle: "Car Insurance",
    expenseAmount: "267.99",
    expenseDate: "2023-03-08",
  });
  const [selectedYear, setSelectedYear] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpenseFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenses((prevState) => [...prevState, { ...expenseFormdata }]);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((item, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  useEffect(() => {
    if (selectedYear) {
      const filteredExpenses = expenses.filter(
        (expense) => selectedYear === expense.expenseDate.split("-")[0]
      );
      setFilteredExpenses(filteredExpenses);
    } else {
      setFilteredExpenses(expenses);
    }
  }, [selectedYear, expenses]);

  return (
    <div className={styles.container}>
      <ExpenseForm
        expenseFormData={expenseFormdata}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Expenses
        expenses={filteredExpenses}
        expenseFormdata={expenseFormdata}
        handleDelete={handleDelete}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </div>
  );
}
