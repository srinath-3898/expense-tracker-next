"use client";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import styles from "./ExpenseItem.module.css";
const ExpenseItem = ({
  index,
  expenseDate,
  expenseTitle,
  expenseAmount,
  handleDelete,
}) => {
  return (
    <div className={styles.container}>
      <ExpenseDate expenseDate={expenseDate} />
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
