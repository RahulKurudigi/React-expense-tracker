import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const expenseHandler = () => {
    setAmount("$100");
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={expenseHandler}>Add expense</button>
    </Card>
  );
};

export default ExpenseItem;
