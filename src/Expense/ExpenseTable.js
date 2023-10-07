function ExpenseTable({ expenses, onRefresh }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{renderRows(expenses)}</tbody>
    </table>
  );
}

function renderRows(expenses) {
  const rows = expenses.map((expense) => {
    return (
      <tr key={expense._id}>
        <td>{expense._id}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{new Date(expense.date).toDateString()}</td>
      </tr>
    );
  });

  return rows;
}

export default ExpenseTable;
