import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { Profile } from "./pages/profile.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginpage.tsx";
import { OvertimePage } from "./pages/overtime.tsx";
import { ContactsPage } from "./pages/contacts.tsx";
import { AdministrationPage } from "./pages/administrationpage.tsx";
import { EquipmentPage } from "./pages/equipmentPage.tsx";
import { InventoriesPage } from "./pages/Inventories.tsx";
import { TrainingPage } from "./pages/TrainingPage.tsx";
import { MessManagment } from "./pages/messmanagmentPage.tsx";

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
    element: <Profile />,
  },

  {
    path: `/overtime`,
    element: <OvertimePage />,
  },

  {
    path: `/contacts`,
    element: <ContactsPage />,
  },

  {
    path: `/administration`,
    element: <AdministrationPage />,
  },

  {
    path: `/equipment`,
    element: <EquipmentPage />,
  },

  {
    path: `/inventories`,
    element: <InventoriesPage />,
  },

  {
    path: `/training`,
    element: <TrainingPage />,
  },

  {
    path: `/mess-managment`,
    element: <MessManagment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
