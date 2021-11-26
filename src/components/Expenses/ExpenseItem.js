import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
 // const [title, setTitle] = useState(props.title);

  // const clickHandler=()=>{
  //   setTitle('new Title');
  //   console.log("yeppp");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
        {/* <button onClick={clickHandler}>button</button> */}
      </div>
    </Card>
  );
}
export default ExpenseItem;
