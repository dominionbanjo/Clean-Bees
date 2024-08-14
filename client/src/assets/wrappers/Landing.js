import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #0f93fe;

  width: 100vw;
  height: 100vh;
  .home-link {
    color: white;
    text-decoration: none;
    transition: 1s;
  }
  .home-link:hover {
    color: #0f93fe;
    cursor: pointer;
    text-decoration: underline;
  }
  .landing-links {
    display: flex;
  }
  .hands-page {
    /* border: 2px solid red; */

    width: 100%;
    height: 75%;
    position: relative;
    background-color: #0f93fe;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${(props) => props.$desktop});
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 150px;
    /* justify-content: center; */
  }
  .foreground-image-container {
    position: absolute;
    top: 24.4%; /* Adjust as needed */
    left: 43.5%; /* Adjust as needed */
    transform: translate(-50%, -50%);
    z-index: 1; /* Ensure this is higher than the background z-index */
  }

  .hands-page img {
    position: absolute;
    width: 80%;
  }

  .hands-page h1 {
    width: 60%;
    margin: 60px;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    color: white;
  }

  .hands-page p {
    color: white;
    font-size: 25px;
    font-weight: 200;
  }

  .hands-page .quote {
    margin: 30px;
    text-decoration: none;
    color: #0f93fe;
    font-weight: 700;
    font-size: 25px;
    /* width: 10%; */
    background-color: #deff4f;
    padding: 20px 65px;
  }

  @media screen and (max-width: 576px) {
    background-color: #0f93fe;
    /* margin-top: 80px; */

    .hands-page {
      width: 100%;
      background-color: #0f93fe;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      background-image: url(${(props) => props.$mobile});
      background-repeat: no-repeat;
      background-position: center;
      padding-top: 40px;
      /* justify-content: center; */
    }

    .foreground-image-container {
      position: absolute;
      top: 35.4%; /* Adjust as needed */
      left: 33.2%; /* Adjust as needed */
      transform: translate(-50%, -50%);
      z-index: 1; /* Ensure this is higher than the background z-index */
      display: none;
    }
    .landing-links {
      margin-top: 40px;
    }

    .hands-page .quote {
      margin: 30px;
      text-decoration: none;
      color: #0f93fe;
      font-weight: 700;
      font-size: 16px;
      /* width: 10%; */
      background-color: #deff4f;
      padding: 20px 35px;
      width: 50%;
      text-align: center;
    }

    .hands-page h1 {
      width: 85%;
      margin: 80px;
      font-size: 40px;
      font-weight: 700;
      text-align: center;
      color: white;
    }

    .hands-page p {
      color: white;
      font-size: 20px;
      font-weight: 200;
      text-align: center;
      width: 95%;
    }
  }
`;

export default Wrapper;
