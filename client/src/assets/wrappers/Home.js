import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 120px;
  background-color: #0f93fe;
  display: flex;
  flex-direction: column;
  .call-now-page {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .call-now-page h1 {
    color: #0f93fe;
    font-weight: 100;
    font-size: 40px;
    margin: 50px;
  }

  .choose-us-page {
    padding: 130px 120px;
    color: #0f93fe;
    background-color: #deff4f;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .choose-us-page h1 {
    font-size: 50px;
    margin-bottom: 60px;
  }

  .row-allign {
    width: 80%;
    /* background-color: aqua; */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
  }
  .row-1 {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-right: 80px;
    /* flex-direction: column; */
  }

  .row-2 {
    margin-top: -25px;
    width: 42%;
    display: flex;
    justify-content: space-between;
    /* padding-right: 60px; */
    /* flex-direction: column; */
  }

  .reason {
    /* width: 100%; */
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .active-anchor {
    color: #deff4f;
  }

  .reason p {
    font-size: 24px;
    font-weight: 600;
  }

  .vl {
    border-left: 2px solid #0f93fe;
    height: 80px;
    width: 100%;
    margin-right: 20px;
  }

  .our-services-page {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 150px 0; */
    padding-bottom: 150px;
  }

  .our-services-page h1 {
    color: #0f93fe;
    margin: 150px;
  }

  .service-container-row {
    display: flex;
  }
  .service-container {
    margin-top: 8px;
  }
  .service-container-row p {
    color: white;
    position: absolute;
    font-size: 26px;
    font-weight: 200;
    left: 80px;
    line-height: 1.5;
    /* margin: 0 auto; */
  }

  .item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .testimonial-container {
    background-color: #deff4f;
    padding: 200px 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .testimonial {
    width: 100%;
    color: #0f93fe;

  } */

  .testimonial-container {
    background-color: #deff4f;
    padding: 200px 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    overflow: hidden;
  }

  .testimonial {
    width: 100%;
    color: #0f93fe;
  }

  .top-tt {
    display: flex;
    margin-bottom: 80px;
  }

  .nav-icon {
    color: #0f93fe;
    fill: #0f93fe;
    margin: 90px;
    /* display: none; */
  }
  .nav-icon:hover {
    cursor: pointer;
  }

  .bullet-container {
    text-align: center;
    margin-top: 10px;
  }

  .bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
  }

  .bullet.active {
    background-color: #0f93fe;
  }

  .testimonial.hidden {
    /* transition: opacity 0.3s ease; */
  }

  .hidden {
    display: none;
  }
  .testimonial h1 {
    text-align: center;
    margin: 40px;
  }
  .testimonial p {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 1px;
  }

  .contact-us-page {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 120px 0;
  }

  .contact-us-page h1 {
    color: #0f93fe;
    margin: 120px;
    font-size: 46px;
  }
  form {
    /* background-color: #0f93fe; */
    width: 30%;
  }
  form input {
    border: none;
    margin-top: 20px;
    padding: 10px 10px;
    border-bottom: 1px solid #0f93fe;
  }
  form input:focus {
    outline: 2px solid grey;
  }
  .form-group-a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-group-a input {
    width: 45%;
  }
  .form-group-b {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .lll {
    width: 100%;
  }

  .bbb {
    padding-bottom: 80px;
  }
  button {
    border: none;
    background-color: #deff4f;
    color: #0f93fe;
    text-decoration: none;
    width: 100%;
    margin: 40px;
    text-align: center;
    font-size: 18px;
    padding: 15px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #0f93fe;
    font-size: 14px;
    font-weight: 100;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #0f93fe;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #0f93fe;
  }

  @media screen and (max-width: 576px) {
    padding-top: 0;
    .call-now-page h1 {
      font-size: 20px;
    }
    .choose-us-page {
      padding: 130px 10px;
      color: #0f93fe;
      background-color: #deff4f;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .choose-us-page h1 {
      font-size: 35px;
      margin-bottom: 30px;
    }

    .row-allign {
      /* background-color: black; */
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* margin-left: -150px; */
    }

    .row-1 {
      /* border: 2px solid red; */

      width: 100%;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      padding-right: 0;
      margin-bottom: 35px;
    }
    .row-2 {
      /* border: 2px solid red; */

      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-right: 45px;
    }

    .reason {
      /* width: 100%; */
      /* width: ; */
      display: flex;
      align-items: center;

      margin-right: 15px;
      /* border: 2px solid red; */
    }

    .reason p {
      width: 100%;
      font-size: 18px;
      font-weight: 600;
      text-align: left;
    }

    .vl {
      border-left: 2px solid #0f93fe;
      height: 50px;
      width: 100%;
      margin-right: 10px;
    }

    .our-services-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding: 150px 0; */
      padding-bottom: 50px;
    }

    .our-services-page h1 {
      color: #0f93fe;
      margin: 50px;
    }
    .service-container-row {
      display: flex;
      flex-direction: column;
    }

    .service-container {
      margin-top: 0px;
    }

    .service-container-row img {
      /* border: 2px solid red; */
      width: 100%;
    }

    .service-container-row p {
      color: white;
      position: absolute;
      font-size: 16px;
      font-weight: 200;
      left: 20px;
      line-height: 1.5;
      /* margin: 0 auto; */
    }

    .testimonial-container {
      /* width: 100%; */
      background-color: #deff4f;
      padding: 120px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nav-icon {
      display: none;
    }
    .testimonial {
      width: 100%;
      text-align: center;
    }

    .top-tt h1 {
      font-size: 30px;
    }
    .top-tt span {
      display: none;
    }

    .contact-us-page {
      padding: 0 15px 120px 15px;
    }

    .contact-us-page h1 {
      text-align: center;
      margin: 25px;
      font-size: 36px;
    }

    form {
      /* background-color: #0f93fe; */
      width: 80%;
    }

    button {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .form-group-a input {
      width: 100%;
    }
  }
`;

export default Wrapper;
