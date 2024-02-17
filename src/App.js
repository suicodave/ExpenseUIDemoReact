import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpensePage from "./Expense/ExpensePage";
import ParticipantsPage from "./Participants/ParticipantsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpensePage />} />
        <Route path="/Participants" element={<ParticipantsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
