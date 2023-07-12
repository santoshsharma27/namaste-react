import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

// import Grocery from "./components/Grocery";
// import About from "./components/About";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
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
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
