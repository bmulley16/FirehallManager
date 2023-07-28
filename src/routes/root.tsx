import { Route, Routes } from "react-router-dom";
import Home from "../components/App";

function Pathways() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// export default Pathways;
