import main from "../assets/images/light.webp";
import Wrapper from "../assets/wrappers/Landing";
import hand from "../assets/images/hands.webp";
import handTwo from "../assets/images/hands-small.webp";
import { Link } from "react-router-dom";
const Landing = ({ landing }) => {
  return (
    <Wrapper $desktop={hand} $mobile={handTwo}>
      <div className="hands-page">
        <h1>GIVE YOUR HOME SOME SHINE</h1>
        <p>
          Reliable house cleaning professionals <br /> serving the greater San
          Francisco area
        </p>
        {landing ? (
          <div className="landing-links">
            <Link to="/register" className="quote" id="quote?">
              Register
            </Link>
            <Link to="/login" className="quote" id="quote?">
              Login
            </Link>
          </div>
        ) : (
          <Link to="/homepage#section1" className="quote" id="quote?">
            Get a Quote
          </Link>
        )}
        {landing && (
          <p>
            Visit{" "}
            <Link className="home-link" to="/homepage">
              Homepage
            </Link>
          </p>
        )}
      </div>

      <div className="foreground-image-container">
        <img src={main} alt="Foreground Image" />
      </div>
    </Wrapper>
  );
};
export default Landing;
