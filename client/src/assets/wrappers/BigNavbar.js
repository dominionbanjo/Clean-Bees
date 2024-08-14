import styled from "styled-components";

const Wrapper = styled.header`
  @media (max-width: 700px) {
    display: none;
  }
  z-index: 2;
  background-color: #0f93fe;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  color: white;
  height: 75px;
  position: fixed;
  .tag {
    width: 20%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }

  .tag:hover {
    /* transform: scale(1.1); */
    cursor: pointer;
  }

  .tag img {
    margin-right: 10px;
  }

  nav {
    /* background-color: black; */
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .profile_dropdown {
    /* background-color: black; */
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
  }
  .profile {
    /* background-color: black; */
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ease-out 0.5s;
    /* justify-content: space-between; */
  }
  .profile:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .profile svg {
    /* display: none; */
    /* width: 13%;
    height: 10%; */
    /* width: 24px;
    height: 24px;
   
    border: 1px solid white;
    border-radius: 50%;
    padding: 2px;
    background-color: white; */
    margin-right: 15px;
    font-size: 22px;
  }

  .menu {
    display: none;
  }

  ul {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.5s ease;
  }

  a:hover {
    color: #deff4f;
  }

  .book-now:hover {
    color: white;
  }
  .book-now {
    font-size: 25px;
    color: #deff4f;
    transition: 0.5s ease;
  }
`;

export default Wrapper;
