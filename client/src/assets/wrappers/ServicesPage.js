import styled from "styled-components";

const Wrapper = styled.div`
  .services-texts {
    background-color: #0f93fe;
    color: white;
    /* padding-top: 80px; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 200px 160px 240px 160px;
  }

  .yellow-text {
    color: #deff4f;
    width: 35%;
  }

  .services-texts-left {
    width: 40%;
  }

  .services-texts-left h1 {
    text-transform: uppercase;
    font-size: 40px;
  }

  .services-texts-left p {
    padding-top: 60px;
    font-size: 20px;
    letter-spacing: 1.5px;
    line-height: 1.5;
  }

  .services-texts-right {
    width: 35%;
  }

  .services-texts-right p {
    font-size: 16px;
    font-weight: 100;
    line-height: 2;
    letter-spacing: 1.2px;
  }

  .services-page {
    padding: 80px 220px;
  }

  .services {
    display: flex;
    padding-top: 40px;
  }

  .service {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #0f93fe;
  }

  .service img {
    border-radius: 50%;
    /* margin-bottom: 30px; */
  }

  .top-p {
    margin: 25px;
    font-size: 20px;
    letter-spacing: 1.5px;
    line-height: 1.5;
  }

  .service p {
    padding-bottom: 10px;
  }
  .service button {
    margin: 20px;
    text-decoration: none;
    color: white;
    background-color: #0f93fe;
    padding: 10px 25px;
    border: none;
    transition: 0.8s ease;
  }

  .service button:hover {
    background-color: rgb(135, 197, 248);
  }

  @media screen and (max-width: 576px) {
    .services-texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 20px 80px 20px;
    }

    .services-texts-left {
      width: 100%;
    }

    .services-texts-right {
      width: 100%;
    }

    .yellow-text {
      color: #deff4f;
      width: 100%;
      margin-bottom: 30px;
    }

    .services-page {
      padding: 60px 20px;
    }

    .services {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
    }

    .service {
      width: 95%;
      margin-bottom: 26px;
    }

    .service button {
      margin: 20px;
      padding: 10px 20px;

      width: 60%;
    }
  }
`;

export default Wrapper;
