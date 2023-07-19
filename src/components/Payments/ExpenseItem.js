import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 style={{ color: props.color }}>{props.title}</h2>
        <p>{props.method}</p>
        <p>{props.installments.length > 0 ? "(할부)" : ""}</p>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={() => props.deleteExpenseItem(props.index)}>
          삭제하기
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
