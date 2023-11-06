import React from "react";

const ExpenseDetails = ({ expenseAmount, expenseLocation }) => {
  return (
    <div>
      <p className="text_small">{expenseAmount}</p>
      <p className="text_small">{expenseLocation}</p>
    </div>
  );
};

export default ExpenseDetails;
