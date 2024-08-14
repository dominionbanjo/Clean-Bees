import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #0f93fe;
  height: 100vh; /* Ensure the wrapper covers the full viewport height */
  width: 100%; /* Ensure the wrapper covers the full width */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  form p {
    margin-top: 10px;
  }
  .formred {
    margin-top: 10px;
    color: red;
    /* text-decoration: none; */
    margin-left: 5px;
  }
  .background {
    background-color: #0f93fe;

    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    margin-top: 20px;
  }
  .background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
  }
  .shape:first-child {
    background: linear-gradient(#1845ad, #23a2f6);
    left: -80px;
    top: -80px;
  }
  .shape:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: -30px;
    bottom: -80px;
  }
  form {
    /* height: 530px; */
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    /* margin-top: 20px; */
  }

  form * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
  .go,
  .fb {
    display: flex;
    justify-content: center;
  }
  svg {
    margin-right: 15px;
    fill: #080710;
  }

  label {
    display: block;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
  }
  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }
  ::placeholder {
    color: #e5e5e5;
  }
  button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  .social {
    margin-top: 30px;
    display: flex;
  }
  .social div {
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
  }
  .social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }
  .social .fb {
    margin-left: 25px;
  }
  .social i {
    margin-right: 4px;
  }

  .active-anchor {
    color: #deff4f;
  }

  .icon-container {
    position: absolute; /* Changed to fixed to keep it at the top left of the viewport */
    top: 0px;
    left: 10px;
    z-index: 100; /* Increased z-index to ensure it appears above other elements */
  }

  .back-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .back-icon:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 576px) {
    .icon-container {
      position: absolute;
      top: -2%;
      left: 30px;
      z-index: 10;
    }
    form {
      height: 90%;
      width: 330px;
      background-color: rgba(255, 255, 255, 0.13);
      /* position: absolute; */
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
      padding: 50px 35px;
      overflow-x: hidden;
      /* margin-top: 20px; */
    }

    .background {
      width: 30px;
      height: 520px;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      margin-top: 20px;

      display: none;
    }
  }
`;

export default Wrapper;
