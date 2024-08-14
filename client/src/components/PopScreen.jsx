import { useHomepageContext } from "../pages/HomepageLayout";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/PopScreen";
import { IoCloseSharp } from "react-icons/io5";
import AnimatedPage from "./AnimatedPage";

const PopScreen = () => {
  const navigate = useNavigate();
  const { user } = useHomepageContext();
  const { showSidebar, toggleSidebar } = useHomepageContext();
  return (
    <AnimatedPage>
      <Wrapper className={showSidebar ? "" : "hidden"}>
        <div
          onClick={() => {
            toggleSidebar();
            navigate("profile");
          }}
          className="profile"
        >
          <div className="header">
            <FaUserCircle />
            {<p style={{ fontSize: "22px" }}>{user?.firstName}</p> || (
              <NavLink to="/login">Log In</NavLink>
            )}
          </div>
          <IoCloseSharp onClick={toggleSidebar} />
        </div>

        <ul>
          <NavLinks smallScreen />
        </ul>
      </Wrapper>
    </AnimatedPage>
  );
};
export default PopScreen;
