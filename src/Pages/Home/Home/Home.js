import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import WorkSample from "../WorkSample/WorkSample";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <WorkSample></WorkSample>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
