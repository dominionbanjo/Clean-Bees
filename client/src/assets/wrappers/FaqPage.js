import styled from "styled-components";

const Wrapper = styled.div`
  .faq-top {
    height: auto;
    color: white;
    background-color: #0f93fe;
    display: flex;
    /* padding-top: 90px; */
    /* align-items: center; */
    justify-content: space-between;
    padding: 220px 400px 100px 400px;
  }

  .faq-top-left {
    width: 40%;
    display: flex;
    flex-direction: column;

    /* justify-content: center; */
    /* text-align: left; */
  }
  .faq-top-left h1 {
    /* color: #deff4f; */
    font-size: 55px;
  }

  .faq-top-left p {
    width: 50%;
    color: #deff4f;
    font-size: 22px;
    letter-spacing: 1.3px;
    font-weight: 100;
    padding-top: 40px;
  }

  .faq-top-right {
    /* background-color:aqua ; */
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }

  .faq-top-right-up {
    display: flex;
    flex-direction: column;
  }

  .qq {
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    padding-bottom: 20px;
  }

  .qqq {
    display: flex;
    margin-top: 25px;
    margin-bottom: 30px;
    font-size: 22px;
    /* justify-content: space-between; */
    /* padding-right: 260px; */
  }

  .ctrl1 {
    margin-right: 30px;
  }

  .qq svg {
    fill: white;
    width: 10%;
    height: 28px;
  }

  .faq {
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    transition: 0.8s ease;
  }

  .faq:hover {
    cursor: pointer;
  }
  .ctrl1:hover {
    cursor: pointer;
  }
  .ctrl2:hover {
    cursor: pointer;
  }

  .www {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .xxx {
    letter-spacing: 1.2px;
    font-size: 15px;
    font-weight: 100;
  }

  .set-yellow {
    color: #deff4f;
    font-weight: 600;
  }

  .hide {
    display: none;
  }

  .www svg {
    fill: white;
    width: 5%;
    /* transform: rotate(180deg); */
  }

  .upside {
    transform: rotate(180deg);
  }
  .logos {
    /* background-color: #fff; */
    /* width: 17px; */
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 20px 65px 35px 20px;
    margin-top: 15px;
  }
  .logos svg {
    fill: white;
    color: white;
    margin-right: 15px;
    /* width: 28%; */
  }

  hr {
    border: none;
    border-top: 1px solid #deff4f;
  }

  .faq-bottom {
    color: #0f93fe;
    display: flex;
    justify-content: space-between;
    padding: 80px 280px;
  }

  .faq-bottom-left {
    width: 40%;
  }

  .faq-bottom-left h1 {
    font-size: 45px;
    padding-bottom: 50px;
  }

  .faq-bottom-left p {
    font-size: 19px;
    letter-spacing: 1.15px;
  }

  .faq-bottom-right {
    width: 40%;
  }

  .right-item {
    padding-bottom: 85px;
  }

  .right-item h2 {
    font-weight: 500;
    padding-bottom: 25px;
  }

  .right-item p {
    letter-spacing: 1.15px;
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    .faq-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 40px 20px 100px 20px;
    }

    .faq-top-left {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 80px;
      /* justify-content: center; */
      /* text-align: left; */
    }

    .faq-top-left p {
      width: 100%;
      color: #deff4f;
      font-size: 20px;
      letter-spacing: 1.3px;
      font-weight: 100;
      padding-top: 40px;
    }

    .faq-top-right {
      /* background-color:aqua ; */
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
    }

    .qq {
      padding-left: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 26px;
      padding-bottom: 20px;
    }

    .faq-bottom {
      color: #0f93fe;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px 20px;
    }

    .faq-bottom-left {
      width: 100%;
    }

    .faq-bottom-right {
      width: 100%;
    }

    .logos {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 20px 65px 35px 10px;
      position: relative;
    }
    .logos svg {
      fill: white;
      color: white;
    }
  }
`;

export default Wrapper;
