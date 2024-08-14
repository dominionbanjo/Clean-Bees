import homeCleaning from "../assets/images/home-cleaning.webp";
import maidServices from "../assets/images/maid-services.webp";
import windowWashing from "../assets/images/window-washing.webp";
import commercialCleaning from "../assets/images/commercial-cleaning.webp";
import moveIn from "../assets/images/move-in.webp";
import carpet from "../assets/images/carpet.webp";

const OurServices = () => {
  return (
    <div className="our-services-page">
      <h1>OUR SERVICES</h1>

      <div className="service-bottom">
        <div className="service-container">
          <div className="service-container-row">
            <div className="item">
              <p>
                Home <br /> Cleaning
              </p>
              <img src={homeCleaning} alt="" />
            </div>
            <div className="item">
              <p>
                Maid <br /> Services
              </p>
              <img src={maidServices} alt="" />
            </div>
          </div>
        </div>

        <div className="service-container">
          <div className="service-container-row">
            <div className="item">
              <p>
                Window <br /> Washing
              </p>
              <img src={windowWashing} alt="" />
            </div>
            <div className="item">
              <p>
                Commercial <br /> Cleaning
              </p>
              <img src={commercialCleaning} alt="" />
            </div>
          </div>
        </div>

        <div className="service-container">
          <div className="service-container-row">
            <div className="item">
              <p>
                Move-In/ <br />
                Move-Out <br /> Cleaning
              </p>
              <img src={moveIn} alt="" />
            </div>
            <div className="item">
              <p>
                Carpet <br /> Cleaning
              </p>
              <img src={carpet} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
