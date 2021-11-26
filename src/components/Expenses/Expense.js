import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("-");

  const filterHandler = (data) => {
    setFilteredYear(data);
  };

 
  let filteredData;
  if(filteredYear==="-") {  filteredData= props.expense}
  else{
  filteredData= props.expense.filter(
    (expenseArrayData) => (filteredYear == expenseArrayData.date.getFullYear().toString())
  );}

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
        <ExpensesChart expenses={filteredData}/>
       <ExpensesList items ={filteredData}/>

        {/* {props.expense.map((expenseArrayData) => (
          <ExpenseItem
          key={expenseArrayData.id}
            title={expenseArrayData.title}
            amount={expenseArrayData.amount}
            date={expenseArrayData.date}
          />
        ))} */}

        
        
      </Card>
    </div>
  );
};

export default Expense;
