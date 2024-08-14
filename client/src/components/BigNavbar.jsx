import Wrapper from "../assets/wrappers/BigNavbar";
import logo from "../assets/images/sponge.webp";
import NavLinks from "./NavLinks";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useHomepageContext } from "../pages/HomepageLayout";

const BigNavbar = () => {
  const { user } = useHomepageContext();
  const navigate = useNavigate();
  return (
    <Wrapper className="big-nav">
      <div className="tag" onClick={() => navigate("/homepage")}>
        <img src={logo} alt="sponge" />
        <h2>CLEAN BEES</h2>
      </div>

      <nav>
        <div className="profile">
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
            <FaUserCircle />
          )}
          {user?.firstName === "Pizza" ? (
            <NavLink to="/login">Log In</NavLink>
          ) : (
            <p onClick={() => navigate("profile")} style={{ fontSize: "20px" }}>
              {user?.firstName}
            </p>
          )}

          {/* <p>Log In</p> */}
        </div>

        <ul>
          <NavLinks />
        </ul>

        <IoMenu className="menu" />
      </nav>
    </Wrapper>
  );
};
export default BigNavbar;
