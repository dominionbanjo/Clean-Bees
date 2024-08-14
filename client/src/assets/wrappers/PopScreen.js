import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #0f93fe;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  a {
    text-decoration: none;
    font-size: 26px;
    color: white;
  }
  ul {
    list-style: none;
  }
  a:hover {
    color: aquamarine;
  }
  .hidden {
    display: none;
    transform: translateX(-100%);
  }
  .profile {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
  }
  ul {
    width: 70%;
    margin-top: 30px;
  }
  li {
    margin-top: 30px;
  }
  .header {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  svg {
    font-size: 30px;
  }
`;

export default Wrapper;
