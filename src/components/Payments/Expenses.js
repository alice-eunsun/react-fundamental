import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem
          id={item.id}
          index={index}
          title={item.title}
          amount={item.amount}
          method={item.method}
          installments={item.installments}
          color={item.color}
          date={item.date}
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;
