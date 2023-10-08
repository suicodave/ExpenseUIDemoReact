import { Table } from "react-bootstrap";

function ExpenseTable({ expenses }) {
  return (
    <div>
      <h2>My Expenses</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderRows(expenses)}</tbody>
      </Table>
    </div>
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
