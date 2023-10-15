import { useEffect, useState } from "react";
import "./ExpensePage.css";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import { Col, Container, Row } from "react-bootstrap";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/expenses`;

    console.log(process.env);

    const response = await fetch(apiUrl);

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
        <ExpenseTable expenses={expenses} />
      </Row>
    </Container>
  );
}

export default ExpensePage;
