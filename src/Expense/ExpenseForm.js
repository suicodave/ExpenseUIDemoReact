import { useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ExpenseForm({ onSubmitedExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(
    new Date(Date.now()).toLocaleDateString("en-CA")
  );

  const submit = async (event) => {
    event.preventDefault();

    const apiUrl = `${process.env.REACT_APP_API_URL}/api/expenses`;

    await fetch(apiUrl, {
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
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">Expense Form</Card.Title>
        <Form onSubmit={submit}>
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
          <Row className="mt-3">
            <Col lg="5">
              <InputGroup>
                <InputGroup.Text>PHP</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                />
              </InputGroup>
            </Col>
            <Col lg="5">
              <InputGroup>
                <InputGroup.Text>Date</InputGroup.Text>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </InputGroup>
            </Col>
            <Col lg="2" className="float-right">
              <Button variant="primary" type="submit" className="w-100">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ExpenseForm;
