"use client";

import styles from "./ExpenseItem.module.css";
const ExpenseItem = ({
  index,
  expenseTitle,
  expenseAmount,
  expenseDate,
  handleDelete,
}) => {
  return (
    <div className={styles.container}>
      <p className="text_small">{expenseTitle}</p>
      <p className="text_small">{expenseAmount}</p>
      <p className="text_small">{expenseDate}</p>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
