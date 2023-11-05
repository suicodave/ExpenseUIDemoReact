import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";

export default function NewExpenseNotification({ showNotification }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showNotification);
  }, [showNotification]);

  return (
    <Toast show={show} onClose={() => setShow(false)} delay={2800} autohide>
      <Toast.Header>
        <strong className="me-auto">System</strong>
      </Toast.Header>
      <Toast.Body>A new expense has been added!</Toast.Body>
    </Toast>
  );
}
