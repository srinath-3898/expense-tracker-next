"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import ExpenseForm from "@/components/ExpenseForm/ExpenseForm";
import Expenses from "@/components/Expenses/Expenses";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  const [expenseFormdata, setExpenseFormData] = useState({
    expenseTitle: "Car Insurance",
    expenseAmount: "267.99",
    expenseDate: "1998-03-08",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpenseFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenses((prevState) => [...prevState, expenseFormdata]);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((item, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={styles.container}>
      <ExpenseForm
        expenseFormData={expenseFormdata}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Expenses
        expenses={expenses}
        expenseFormdata={expenseFormdata}
        handleDelete={handleDelete}
      />
    </div>
  );
}
