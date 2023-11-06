"use client";

import { useState } from "react";
import styles from "./ExpenseItem.module.css";
const ExpenseItem = () => {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  const locationOfExpenditure = "Hyderabad";
  return (
    <div className={styles.container}>
      <div>
        <p className="text_small">{expenseDate.toLocaleDateString()}</p>
      </div>
      <div className={styles.expense_item_description}>
        <p className="text_small">{expenseTitle}</p>
      </div>
      <div>
        <p className="text_small">$ {expenseAmount}</p>
      </div>
      <div>
        <p className="text_small">{locationOfExpenditure}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
