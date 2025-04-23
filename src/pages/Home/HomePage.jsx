import React from 'react'
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  return (
    <div className='home'>
      <Container>
        <h1 className='text-3xl p-2 mt-5'>الرئيسيه</h1>
        {/* ===== Serach box ===== */}
        <div className='flex items-center justify-center'>
       <SearchBar/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
