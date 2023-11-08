"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ExpenseForm from "@/components/ExpenseForm/ExpenseForm";
import Expenses from "@/components/Expenses/Expenses";

export default function Home() {
  const dummyExpenses = [
    { expenseTitle: "Movie", expenseAmount: 200, expenseDate: "01-02-2022" },
    { expenseTitle: "Books", expenseAmount: 100, expenseDate: "08-22-2023" },
    {
      expenseTitle: "Grocery",
      expenseAmount: 500,
      expenseDate: "08-25-2023",
    },
    { expenseTitle: "Fuel", expenseAmount: 800, expenseDate: "08-25-2023" },
    { expenseTitle: "Food", expenseAmount: 150, expenseDate: "09-01-2023" },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [expenseFormdata, setExpenseFormData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const [showExpenseForm, setShowExpenseForm] = useState(false);
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

  return (
    <div className={styles.container}>
      {showExpenseForm ? (
        <ExpenseForm
          expenseFormData={expenseFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setShowExpenseForm={setShowExpenseForm}
        />
      ) : (
        <div className={styles.add_expense_button}>
          <button
            className="btn_primary btn_extra_large"
            onClick={() => setShowExpenseForm(true)}
          >
            Add Expense
          </button>
        </div>
      )}
      <Expenses
        expenses={expenses}
        handleDelete={handleDelete}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </div>
  );
}
