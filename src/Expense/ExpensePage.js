import { useEffect, useState } from "react";
import "./ExpensePage.css";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import { Col, Container, Row } from "react-bootstrap";

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
    <Container>
      <Row className="my-5">
        <Col>
          <ExpenseForm onSubmitedExpense={fetchExpenses} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <ExpenseTable expenses={expenses} onRefresh={fetchExpenses} />
      </Row>
    </Container>
  );
}

export default ExpensePage;
