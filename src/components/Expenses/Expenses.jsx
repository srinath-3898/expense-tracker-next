import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";

const Expenses = ({
  expenses,
  expenseFormdata,
  handleDelete,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_controller}>
        <p className="text_medium bold">Filter by year</p>
        <select
          value={selectedYear}
          onChange={(event) => setSelectedYear(event.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
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
