import { Routes, Route } from "react-router-dom";
import Navbar from "../src/utils/Navbar/Navbar";
import HomePage from "../src/pages/Home/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
