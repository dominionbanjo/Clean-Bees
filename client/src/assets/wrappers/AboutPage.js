import styled from "styled-components";

const Wrapper = styled.div`
  .about-texts {
    background-color: #0f93fe;
    color: white;
    /* padding-top: 80px; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 200px 160px 300px 160px;
  }

  .about-texts img {
    position: absolute;
    top: 410px;
    width: 100%;
  }
  .yellow-text {
    color: #deff4f;
  }

  .about-texts-left {
    width: 40%;
  }

  .about-texts-left h1 {
    text-transform: uppercase;
    font-size: 40px;
  }

  .about-texts-left p {
    padding-top: 60px;
    font-size: 20px;
    letter-spacing: 1.5px;
    line-height: 1.5;
  }

  .about-texts-right {
    width: 35%;
  }

  .about-texts-right p {
    font-size: 16px;
    font-weight: 100;
    line-height: 2;
    letter-spacing: 1.2px;
  }

  .about-stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #0f93fe;
    /* padding: 340px 400px; */
    padding: 420px 400px 180px 400px;
  }

  .row-1 {
    display: flex;
    width: 42%;
    justify-content: space-between;
  }

  .row-2 {
    display: flex;
    width: 42%;
    justify-content: space-between;
  }

  .stats {
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 30px; */
  }

  .stats h1 {
    font-size: 90px;
  }

  .stats p {
    font-size: 20px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    padding-top: 10px;
  }

  /* .active-anchor{
    color: #deff4f;
    font-weight: 600;
} */
  @media screen and (max-width: 576px) {
    .about-texts {
      flex-direction: column;
      padding: 66px 20px 150px 20px;
    }

    .yellow-text {
      color: #deff4f;
      margin-bottom: 30px;
    }

    .about-texts img {
      content: url(${(props) => props.$glovesT});
      position: absolute;
      top: 625px;
      left: 0;

      /* overflow: hidden; */
      /* width: 100vw; */
    }

    .about-texts-left {
      width: 100%;
    }

    .about-texts-left p {
      padding-top: 30px;
    }

    .about-texts-right {
      width: 100%;
    }

    .about-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      /* padding: 340px 400px; */
      padding: 140px 20px 140px 20px;
    }

    .row-1 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
    }

    .row-2 {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .stats {
      /* width: 45%; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* margin: 30px; */
    }

    .stats h1 {
      font-size: 60px;
    }

    .stats p {
      width: 50%;
      text-align: center;
      font-size: 20px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      padding-top: 10px;
    }
  }
`;

export default Wrapper;
