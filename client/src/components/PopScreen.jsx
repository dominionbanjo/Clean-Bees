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
        <div className="profile">
          <div className="header">
            {user.avatar ? (
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
                src={user.avatar}
                alt="avatar"
                className="img"
              />
            ) : (
              <FaUserCircle style={{ marginRight: "8px" }} />
            )}
            {user?.firstName === "Pizza" ? (
              <NavLink to="/login">Log In</NavLink>
            ) : (
              <p
                onClick={() => {
                  toggleSidebar();
                  navigate("profile");
                }}
                style={{ fontSize: "20px" }}
              >
                {user?.firstName}
              </p>
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
