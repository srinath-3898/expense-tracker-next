import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  const [expenseFormdata, setExpenseFormData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpenseFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(expenseFormdata);
  return (
    <form className={styles.expense_form}>
      <label htmlFor="expenseTitle" className="text_small">
        Expense Title
      </label>
      <input
        type="text"
        className="input_medium"
        name="expenseTitle"
        onChange={handleChange}
      />
      <label htmlFor="expenseAmount" className="text_small">
        Expense Amount
      </label>
      <input
        type="number"
        className="input_medium"
        name="expenseAmount"
        onChange={handleChange}
      />
      <label htmlFor="expenseDate" className="text_small">
        Expense Date
      </label>
      <input
        type="date"
        className="input_medium"
        name="expenseDate"
        onChange={handleChange}
      />
    </form>
  );
};

export default ExpenseForm;
