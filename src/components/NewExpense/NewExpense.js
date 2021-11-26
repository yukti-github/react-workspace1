import React, {useState} from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler =() =>{
    setIsEditing(true);
  }
  const expenseFormCancelHandler= ()=>{ setIsEditing(false);
  }

    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData= {
        ...enteredExpenseData,
        id: Math.random().toString()
        }
        // console.log("from expense.js");
        // console.log(expenseData);
        props.expenseDown(expenseData);
        setIsEditing(false);
  }
    
   

return (

<div className="new-expense">
{!isEditing && <button onClick={startEditingHandler}> Add new expense </button>}
{isEditing && <ExpenseForm onCancel={expenseFormCancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>}

  </div> );

}

export default NewExpense;