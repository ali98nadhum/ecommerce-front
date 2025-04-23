import React from "react";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="home">
      <Container>
        <h1 className="text-3xl p-2 mt-5">الرئيسيه</h1>
        {/* ===== Serach box ===== */}
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
        {/* ===== Carousel ===== */}
        <Carousel />
      </Container>
    </div>
  );
};

export default HomePage;
