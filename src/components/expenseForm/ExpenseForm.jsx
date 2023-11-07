import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ expenseFormData, handleChange, handleSubmit }) => {
  return (
    <form className={styles.expense_form} onSubmit={handleSubmit}>
      <h1>Expense Form</h1>
      <div className={styles.input_controller}>
        <label htmlFor="expenseTitle" className="text_small">
          Expense Title
        </label>
        <input
          type="text"
          className="input_medium"
          placeholder="Expense Title"
          name="expenseTitle"
          value={expenseFormData.expenseTitle}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="expenseAmount" className="text_small">
          Expense Amount
        </label>
        <input
          type="number"
          className="input_medium"
          placeholder="Expense Amount"
          name="expenseAmount"
          value={expenseFormData.expenseAmount}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="expenseDate" className="text_small">
          Expense Date
        </label>
        <input
          type="date"
          className="input_medium"
          name="expenseDate"
          value={expenseFormData.expenseDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn_medium btn_primary">
        Add expense
      </button>
    </form>
  );
};

export default ExpenseForm;
