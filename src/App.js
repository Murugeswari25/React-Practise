import React, { lazy, Suspense, useState, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import ErrorPage from "./component/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./component/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

const AppLayout = () => {
  const [UserInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      Name: "Akila",
    };
    setUserInfo(data.Name);
  }, []);

  return (
    <div>
      <Provider store= {appStore}>
        <UserContext.Provider value={{ loggedInUser: UserInfo, setUserInfo }}>
          <div className="App">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));
const Grocery = lazy(() => import("./component/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const headings = createRoot(document.getElementById("headings"));
headings.render(<RouterProvider router={appRouter} />);
