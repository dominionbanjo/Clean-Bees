import styled from "styled-components";

const Wrapper = styled.div`
  .plan-section {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
  }

  .plan-texts {
    color: #0f93fe;
    text-align: center;
  }

  .plan-texts h1 {
    text-transform: uppercase;
    margin-top: 80px;
    font-size: 36px;
    font-weight: 800;
  }

  .plan-texts p {
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: 18px;
    letter-spacing: 1.2px;
  }

  .plans-container {
    /* background-color: aqua; */
    margin: 40px;
    width: 65%;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }

  .plan {
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    text-align: center;
    border: 2px solid #0f93fe;
    margin: 20px;
  }

  .plan-top {
    position: relative;
    border-bottom: 2px solid #0f93fe;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }

  .best-value {
    background-color: #0f93fe;
    padding: 6px 8px;
    color: white;
    font-weight: 100;
    font-size: 14px;
    position: absolute;
    top: -20px;
  }

  .plan-top button {
    width: 90%;
    padding: 15px 10px;
    color: white;
    background-color: #0f93fe;
    border: none;
    margin-top: 20px;
    font-size: 18px;
    transition: 0.8s ease;
  }

  .plan-top button:hover {
    background-color: rgb(135, 197, 248);
  }

  .plan-top h2 {
    color: #0f93fe;
    text-transform: uppercase;
  }
  .plan-top h1 {
    color: #0f93fe;
    font-size: 90px;
    margin: 20px;
  }

  .plan-top p {
    font-weight: 100;
    margin-bottom: 30px;
  }

  .small-p {
    font-size: 14px;
  }

  .plan-bottom {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 50px 30px;
  }

  .plan-bottom p {
    font-weight: 100;
  }

  .aa {
    background-color: #deff4f;
  }
  .bb {
    background-color: #e7f4ff;
  }
  .cc {
    background-color: #deff4f;
  }

  li {
    /* background-color: black; */
    list-style: none;
    display: flex;
    align-items: center;
  }

  li svg {
    width: 15%;
    margin-right: 10px;
    fill: #0f93fe;
  }

  @media screen and (max-width: 576px) {
    .plans-container {
      /* background-color: aqua; */
      margin: 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }

    .plan {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      text-align: center;
      border: 2px solid #0f93fe;
      margin: 20px;
    }
  }
`;

export default Wrapper;
