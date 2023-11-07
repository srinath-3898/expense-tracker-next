import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";

const Expenses = ({ expenses, expenseFormdata, handleDelete }) => {
  return (
    <div className={styles.container}>
      {expenses.map((item, index) => (
        <ExpenseItem
          key={index}
          index={index}
          expenseTitle={expenseFormdata.expenseTitle}
          expenseAmount={expenseFormdata.expenseAmount}
          expenseDate={expenseFormdata.expenseDate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Expenses;
