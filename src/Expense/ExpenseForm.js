import { useState } from "react";

function ExpenseForm({ onSubmitedExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(
    new Date(Date.now()).toLocaleDateString("en-CA")
  );

  const submit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:5050/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        amount: amount,
        date: date,
      }),
    });

    onSubmitedExpense();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {description}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
