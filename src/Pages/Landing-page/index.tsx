import React from 'react'
import "./index.css";
import Header from '../../Component/header';
import Navbar from "../../Component/navbar/index";

export default function landingPage() {
  return (
    <main className='main-content'>
      <Header />
      <Navbar />
    </main>
  )
}
