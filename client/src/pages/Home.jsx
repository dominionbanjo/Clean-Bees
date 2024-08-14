import { useLocation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Home";
import ChooseUs from "../components/ChooseUs";
import ContactSection from "../components/ContactSection";
import OurServices from "../components/OurServices";
import TestimonialSlider from "../components/TestimonialSection";
import Landing from "./Landing";
import { useEffect } from "react";
const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <Wrapper>
      <Landing />
      <div className="call-now-page">
        <h1>Call Now 123-456-7890</h1>
      </div>
      <ChooseUs />
      <OurServices />
      <TestimonialSlider />
      <ContactSection />
    </Wrapper>
  );
};
export default Home;
