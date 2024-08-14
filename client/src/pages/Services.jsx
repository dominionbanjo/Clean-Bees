import Wrapper from "../assets/wrappers/ServicesPage";
import serviceOne from "../assets/images/service-one.webp";
import serviceTwo from "../assets/images/service-two.webp";
import serviceThree from "../assets/images/service-three.webp";
import serviceFour from "../assets/images/service-four.webp";
import serviceFive from "../assets/images/service-five.webp";
import serviceSix from "../assets/images/service-six.webp";

const Services = () => {
  return (
    <Wrapper>
      <div className="services-texts">
        <div className="services-texts-left">
          <h1>Services</h1>
          <p className="yellow-text">When We Say Clean, We Mean Immaculate</p>
        </div>

        <div className="services-texts-right">
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
      </div>

      <div className="services-page">
        <div className="services">
          <div className="service">
            <img src={serviceOne} alt="Home Cleaning" />
            <div className="service-details">
              <p className="top-p">Home Cleaning</p>
              <p>3 hr</p>
              <p>$200</p>
            </div>
            <button>Book Now</button>
          </div>

          <div className="service">
            <img src={serviceTwo} alt="Maid Services" />
            <div className="service-details">
              <p className="top-p">Maid Services</p>
              <p>2 hr</p>
              <p>$200</p>
            </div>
            <button>Book Now</button>
          </div>

          <div className="service">
            <img src={serviceThree} alt="Window Washing" />
            <div className="service-details">
              <p className="top-p">Window Washing</p>
              <p>1 hr</p>
              <p>$150</p>
            </div>
            <button>Book Now</button>
          </div>
        </div>

        <div className="services">
          <div className="service">
            <img src={serviceFour} alt="Commercial Cleaning" />
            <div className="service-details">
              <p className="top-p">Commercial Cleaning</p>
              <p>5 hr</p>
              <p>$600</p>
            </div>
            <button>Book Now</button>
          </div>

          <div className="service">
            <img src={serviceFive} alt="Move-in/Move-Out Cleaning" />
            <div className="service-details">
              <p className="top-p">Move-in/Move-Out Cleaning</p>
              <p>4 hr</p>
              <p>$300</p>
            </div>
            <button>Book Now</button>
          </div>

          <div className="service">
            <img src={serviceSix} alt="Carpet Cleaning" />
            <div className="service-details">
              <p className="top-p">Carpet Cleaning</p>
              <p>2 hr</p>
              <p>$300</p>
            </div>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;
