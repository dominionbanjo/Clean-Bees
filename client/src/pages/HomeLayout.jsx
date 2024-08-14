import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};
export default HomeLayout;
