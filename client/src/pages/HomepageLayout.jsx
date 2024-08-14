import { Outlet, useNavigate } from "react-router-dom";
import BigNavbar from "../components/BigNavbar";
import Footer from "../components/Footer";
import SmallNavbar from "../components/SmallNavbar";
import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    try {
      const { data } = await customFetch.get("/users/current-user");
      return data;
    } catch (error) {
      return {
        user: { firstName: "Pizza", lastName: "", email: "", location: "" },
      };
    }
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    toast.info("Please login to your account");
    return { user: { firstName: "Pizza" } };
  }
};

const HomepageContext = createContext();

const HomepageLayout = ({ queryClient }) => {
  const { data } = useQuery(userQuery);
  const user = data?.user || { firstName: "Guest" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    if (hasLoggedOut) return; // Prevent multiple logout attempts
    setHasLoggedOut(true); // Set the flag
    await customFetch.get("/auth/logout");
    queryClient.clear();
    toast.success("Logout successful");
    navigate("/homepage");
  };

  customFetch.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (isAuthError && !hasLoggedOut) {
      logoutUser();
    }
  }, [isAuthError, hasLoggedOut]);

  return (
    <HomepageContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <BigNavbar />
      <SmallNavbar />
      <Outlet />
      <Footer />
    </HomepageContext.Provider>
  );
};

export const useHomepageContext = () => useContext(HomepageContext);
export default HomepageLayout;
