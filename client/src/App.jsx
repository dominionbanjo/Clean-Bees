import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  Landing,
  About,
  HomepageLayout,
  Faq,
  Login,
  Pricing,
  Register,
  Services,
  Error,
  HomeLayout,
  Home,
  Profile,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as profileAction } from "./pages/Profile";
import { loader as homepageLoader } from "./pages/HomepageLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: "/homepage",
        element: <HomepageLayout queryClient={queryClient} />,
        loader: homepageLoader(queryClient),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
          {
            path: "services",
            element: <Services />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
