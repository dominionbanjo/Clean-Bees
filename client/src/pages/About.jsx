import Wrapper from "../assets/wrappers/AboutPage";
import gloves from "../assets/images/gloves.webp";
import glovesT from "../assets/images/gloves-small.webp";

const About = () => {
  return (
    <Wrapper $mobile={glovesT}>
      <div className="about-texts">
        <div className="about-texts-left">
          <h1>About us</h1>
          <p className="yellow-text">
            Committed to Keeping <br /> Your Home Squeaky Clean
          </p>
        </div>

        <div className="about-texts-right">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. I'm a
            paragraph. Click here to add your own text and edit me. Let your
            users get to know you.​
          </p>
        </div>

        <img className="responsive-img" src={gloves} alt="Gloves" />
      </div>

      <div className="about-stats">
        <div className="row-1">
          <div className="stats">
            <h1>740</h1>
            <p>Clean Homes</p>
          </div>

          <div className="stats">
            <h1>35</h1>
            <p>Professional Staffers</p>
          </div>
        </div>

        <div className="row-2">
          <div className="stats">
            <h1>850</h1>
            <p>Happy Clients</p>
          </div>

          <div className="stats">
            <h1>4</h1>
            <p>Years in Business</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default About;
