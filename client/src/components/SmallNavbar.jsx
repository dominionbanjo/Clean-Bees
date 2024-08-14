import Wrapper from "../assets/wrappers/SmallNavbar";
import logo from "../assets/images/sponge.webp";
import { IoMenuSharp } from "react-icons/io5";
import PopScreen from "./PopScreen";
import { useHomepageContext } from "../pages/HomepageLayout";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SmallNavbar = () => {
  const { showSidebar, toggleSidebar } = useHomepageContext();
  const navigate = useNavigate();
  return (
    <>
      <Wrapper className="small-nav">
        <div className="tag" onClick={() => navigate("/homepage")}>
          <img src={logo} alt="sponge" />
          <h2>CLEAN BEES</h2>
        </div>
        <IoMenuSharp className="open" onClick={toggleSidebar} />
      </Wrapper>

      <AnimatePresence>{showSidebar && <PopScreen />}</AnimatePresence>
    </>
  );
};

export default SmallNavbar;
