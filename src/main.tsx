import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { Profile } from "./components/pages/profile.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/loginpage.tsx";
import AccountLandingPage from "./components/pages/accountLandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: `/account`,
    element: <AccountLandingPage />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
