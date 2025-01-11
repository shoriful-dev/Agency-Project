import React from "react"
import Banner from "../layouts/Banner";
import AboutOurCompany from '../layouts/AboutOurCompany';
import Cart from "../layouts/Cart";
import WhyChooseOrtencey from "../layouts/WhyChooseOrtencey";
import OurPricing from "../layouts/OurPricing";
import AppoinMent from "../layouts/AppoinMent";
import TeamMember from "../layouts/TeamMember";
import Testimonial from "../layouts/Testimonial";
import WeAreHire from "../layouts/WeAreHire";
import OurBlog from "../layouts/OurBlog";

const Home = () => {
  return (
    <>
    <Banner />
    <AboutOurCompany />
    <Cart />
    <WhyChooseOrtencey />
    <OurPricing />
    <AppoinMent />
    <TeamMember />
    <Testimonial />
    <WeAreHire />
    <OurBlog />
    </>
  )
}

export default Home
