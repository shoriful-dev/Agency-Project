import React from "react"
import Nav_Top from "../layouts/Nav_Top"
import Navber from "../layouts/Navber"
import Banner from "../layouts/Banner";
import AboutOurCompany from '../layouts/AboutOurCompany';
import Cart from "../layouts/Cart";

const Home = () => {
  return (
    <>
    <Nav_Top />
    <Navber />
    <Banner />
    <AboutOurCompany />
    <Cart />
    </>
  )
}

export default Home
