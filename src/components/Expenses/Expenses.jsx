import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import styles from "./Expenses.module.css";

const Expenses = ({
  expenses,
  handleDelete,
  selectedYear,
  setSelectedYear,
}) => {
  const filteredExpenses = selectedYear
    ? expenses.filter(
        (expense) =>
          parseInt(selectedYear) === new Date(expense.expenseDate).getFullYear()
      )
    : expenses;
  return (
    <div className={styles.container}>
      <div className={styles.input_controller}>
        <p className="text_medium bold">Filter by year</p>
        <select
          className="input_large"
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
      <ExpensesChart filteredExpenses={filteredExpenses} />

      {filteredExpenses?.length > 0 ? (
        filteredExpenses.map((item, index) => (
          <ExpenseItem
            key={index}
            index={index}
            expenseDate={item.expenseDate}
            expenseTitle={item.expenseTitle}
            expenseAmount={item.expenseAmount}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text_extra_large bold center">Found No Expenses</p>
      )}
      {filteredExpenses?.length === 1 && (
        <p className="text_small center">
          The list has only one expense, please add some more...
        </p>
      )}
    </div>
  );
};

export default Expenses;
