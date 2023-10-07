import { useEffect, useState } from "react";
import "./ExpensePage.css";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";

function ExpensePage() {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
      const response = await fetch("http://localhost:5050/expenses");
  
      const data = await response.json();
  
      setExpenses(data);
    };
  
    useEffect(() => {
      fetchExpenses();
    }, []);

  return (
    <div className="expense-page-shell">
      My Expenses
      <ExpenseForm onSubmitedExpense={fetchExpenses}/>
      <br />
      <ExpenseTable expenses={expenses} onRefresh={fetchExpenses} />
    </div>
  );
}

export default ExpensePage;
