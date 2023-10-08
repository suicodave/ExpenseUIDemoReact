import { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ExpenseForm({ onSubmitedExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
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
    <Form onSubmit={submit}>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <InputGroup.Text>PHP</InputGroup.Text>
            <Form.Control
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <InputGroup.Text>Date</InputGroup.Text>
            <Form.Control
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Button className="mt-3" variant="primary">Save</Button>
    </Form>
  );
}

export default ExpenseForm;
