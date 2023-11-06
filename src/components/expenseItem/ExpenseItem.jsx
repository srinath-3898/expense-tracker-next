"use client";

import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseDetails from "../expenseDetails/ExpenseDetails";
import styles from "./ExpenseItem.module.css";
const ExpenseItem = ({ expenseLocation }) => {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className={styles.container}>
      <ExpenseDate expenseDate={expenseDate} />
      <p className="text_small">{expenseTitle}</p>
      <ExpenseDetails
        expenseAmount={expenseAmount}
        expenseLocation={expenseLocation}
      />
    </div>
  );
};

export default ExpenseItem;
