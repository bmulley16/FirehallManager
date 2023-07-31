import { Route, Routes } from "react-router-dom";
import Home from "../components/App";
import LoginPage from "../components/pages.tsx/loginpage";
function Pathways() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Pathways;
