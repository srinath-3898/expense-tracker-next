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
      <div>
        <p>{new Date(expenseDate).toDateString()}</p>
      </div>
      <p className="text_small">{expenseTitle}</p>
      <p className="text_small">${expenseAmount}</p>
      <button
        className="btn_small btn_danger"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
