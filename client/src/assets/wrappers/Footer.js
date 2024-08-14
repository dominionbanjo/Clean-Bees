import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #0f93fe;
  display: flex;
  padding: 150px 300px;
  color: white;
  /* align-items: center; */
  justify-content: space-between;

  p {
    font-size: 16px;
    font-weight: 100;
    line-height: 1.5;
  }
  .footer-hr {
    width: 30%;
  }
  .footer-left {
    width: 28%;
  }
  .footer-left h1 {
    margin-bottom: 60px;
  }

  .footer-right {
    /* background-color: #deff4f; */
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
  }
  .rleft {
    width: 40%;
  }
  .rleft p {
    margin-top: 20px;
  }
  .rleft hr {
    margin: 20px 0;
  }
  .rleft h2 {
    margin-bottom: 25px;
    /* margin-top: -40px; */
  }

  .rp {
    /* margin-top: 80px; */
  }

  .rright h2 {
    margin-top: -15px;
    margin-bottom: 25px;
  }
  .rright {
    width: 40%;
  }
  .logos {
    /* background-color: black; */
    /* margin: 0 20px 20px 20px; */
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
  }

  @media screen and (max-width: 576px) {
    /* display: none; */
    display: flex;
    flex-direction: column;
    padding: 40px 15px;
    color: white;
    align-items: center;
    justify-content: space-between;

    .footer-left {
      width: 100%;
      margin-bottom: 60px;
      text-align: center;
    }

    .footer-right {
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-left: -50px;
    }

    .rleft {
      /* align-items: center; */
      width: 100%;
      text-align: center;
      margin-bottom: 60px;
      align-items: center;
      justify-content: center;
    }

    .rleft h2 {
      /* margin-bottom: 25px; */
      font-size: 30px;
      text-transform: uppercase;
    }

    .rright h2 {
      /* margin-bottom: 25px; */
      font-size: 30px;
      text-transform: uppercase;
    }

    .footer-hr {
      /* text-align: center; */
      width: 100%;
    }

    .rright {
      width: 100%;
      text-align: center;
    }

    .logos {
      /* background-color: black; */
      /* margin: 0 20px 20px 20px; */
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 150px;
      padding-top: 40px;
    }
  }
`;

export default Wrapper;
