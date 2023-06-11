import { Routes, Route } from "react-router-dom";
import LaunchPage from "../Launch";

export default function App() {
  return (
    <Routes>
      <Route exact path="/launches" element={<LaunchPage />} />
      <Route path="/" element={<LaunchPage />} />
    </Routes>
  );
}
