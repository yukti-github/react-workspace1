import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expenses/Expense.js"
import React, {useState} from 'react';

import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYDATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

function App() {
  
 const [allExpenses, allExpensesHandler]= useState(DUMMYDATA);

  const addExpenseHandler= (expenseFromChild) =>{
    console.log("hey its app.js");
    console.log(expenseFromChild);
     allExpensesHandler(prevState => {return [expenseFromChild, ...prevState]})
    
  }
  return (
    <div>
      <NewExpense expenseDown={addExpenseHandler}/>
      <Expense expense={allExpenses}/>
     
    </div>
  );
}

export default App;
