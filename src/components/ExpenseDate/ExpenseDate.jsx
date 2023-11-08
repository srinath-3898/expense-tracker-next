const ExpenseDate = ({ expenseDate }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const expenseMonth = monthNames[new Date(expenseDate).getMonth()];
  const expenseDay = new Date(expenseDate).getUTCDate();
  const expenseYear = new Date(expenseDate).getFullYear();
  return (
    <div>
      <p className="text_small bold center">{expenseDay}</p>
      <p className="text_small bold center">{expenseMonth}</p>
      <p className="text_small bold center">{expenseYear}</p>
    </div>
  );
};

export default ExpenseDate;
