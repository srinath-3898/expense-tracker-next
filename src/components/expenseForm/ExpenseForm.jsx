import React from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
  };
  return (
    <form className={styles.expense_form}>
      <label htmlFor="expense_title" className="text_small">
        Expense Title
      </label>
      <input
        type="text"
        className="input_medium"
        name="expense_title"
        onChange={handleChange}
      />
      <label htmlFor="expense_amount" className="text_small">
        Expense Amount
      </label>
      <input
        type="number"
        className="input_medium"
        name="expense_amount"
        onChange={handleChange}
      />
      <label htmlFor="expense_date" className="text_small">
        Expense Date
      </label>
      <input
        type="date"
        className="input_medium"
        name="expense_date"
        onChange={handleChange}
      />
    </form>
  );
};

export default ExpenseForm;
