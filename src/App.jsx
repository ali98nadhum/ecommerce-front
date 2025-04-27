import { Routes, Route } from "react-router-dom";
import Navbar from "../src/utils/Navbar/Navbar";
import HomePage from "../src/pages/Home/HomePage";
import TopHeader from "../src/components/TopHeader/TopHeader";

function App() {
  return (
    <>
    <TopHeader/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
