"use client";

import styles from "./ExpenseItem.module.css";
const ExpenseItem = ({ expenseLocation }) => {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
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
        <p className="text_small">{expenseLocation}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
