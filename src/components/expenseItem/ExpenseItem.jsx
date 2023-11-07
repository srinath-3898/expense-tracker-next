"use client";

import { useState } from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseDetails from "../expenseDetails/ExpenseDetails";
import styles from "./ExpenseItem.module.css";
const ExpenseItem = ({ expenseLocation, handleDelete, index }) => {
  const expenseDate = new Date().toLocaleDateString();
  const [expenseTitle, setExpenseTitle] = useState("Car Insurance");
  const expenseAmount = 294.67;
  return (
    <div className={styles.container}>
      <ExpenseDate expenseDate={expenseDate} />
      <p className="text_small">{expenseTitle}</p>
      <ExpenseDetails
        expenseAmount={expenseAmount}
        expenseLocation={expenseLocation}
      />
      <button onClick={() => setExpenseTitle("bike insurance")}>
        Change Title
      </button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
