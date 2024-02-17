import { useEffect, useState } from "react";
import "./ExpensePage.css";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import NewExpenseNotification from "./NewExpenseNotification";
import { Button, Col, Container, Row } from "react-bootstrap";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);

  const [newExpenseCreated, setNewExpenseCreated] = useState(false);

  const fetchExpenses = async () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/expenses`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    setExpenses(data);
  };

  const onExpenseCreated = () => {
    setNewExpenseCreated((state) => ({ ...true }));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  useEffect(() => {
    if (newExpenseCreated) {
      fetchExpenses();
    }
  }, [newExpenseCreated]);

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <ExpenseForm onSubmitedExpense={onExpenseCreated} />
        </Col>
        <Col>
          <Button href="/Participants">View Participants</Button>
          <br />
          <br />
          <NewExpenseNotification showNotification={newExpenseCreated} />
        </Col>
      </Row>
      <Row>
        <ExpenseTable expenses={expenses} />
      </Row>
    </Container>
  );
}

export default ExpensePage;
