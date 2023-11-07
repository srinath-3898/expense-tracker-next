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
          <option value="">Please select</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {expenses?.length > 0 ? (
        expenses.map((item, index) => (
          <ExpenseItem
            key={index}
            index={index}
            expenseTitle={item.expenseTitle}
            expenseAmount={item.expenseAmount}
            expenseDate={item.expenseDate}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text_small bold">
          There are no expenses in the list, please add expenses to view...
        </p>
      )}
      {expenses?.length === 1 && (
        <p className="text_small">
          The list has only one expense, please add some more...
        </p>
      )}
    </div>
  );
};

export default Expenses;
