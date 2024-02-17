import { Col, Container, Navbar, Row } from "react-bootstrap";
import ParticiantsList from "./ParticiantsList";

function ParticipantsPage() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Particiants</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="py-4" fluid>
        <Row>
          <Col></Col>
          <Col>
            <ParticiantsList />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ParticipantsPage;
