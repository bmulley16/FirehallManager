import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { Profile } from "./pages/profile.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginpage.tsx";
import { OvertimePage } from "./pages/overtime.tsx";
import { ContactsPage } from "./pages/contacts.tsx";
import { AdministrationPage } from "./pages/administrationpage.tsx";
import { EquipmentPage } from "./pages/equipmentPage.tsx";
import { InventoriesPage } from "./pages/Inventories.tsx";
import { TrainingPage } from "./pages/trainingPage.tsx";
import { MessManagment } from "./pages/messmanagmentPage.tsx";
import DailyOnClickComponent from "./pages/dailyRenderedCalenderInterface.tsx";
import { SignUpPage } from "./pages/signUpPage.tsx";
import { useState } from "react";
import { SetUserContext, UserContext } from "./contexts";
import { User } from "./types/index.ts";
import { DailyInventory } from "./pages/dailyEquipmentInventory.tsx";
import { StationInventories } from "./pages/stationInventory.tsx";
import { DriverCheckSheet } from "./pages/driverCheckSheet.tsx";
import { getLoggedInUser } from "./utils/api.ts";
import * as api from "./utils/api.ts";

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

  {
    path: `/overtime/daily-overview`,
    element: <DailyOnClickComponent />,
  },

  {
    path: `/signup`,
    element: <SignUpPage />,
  },

  {
    path: `/inventories/daily-equipment-inventories`,
    element: <DailyInventory />,
  },

  {
    path: `/inventories/station-inventories`,
    element: <StationInventories />,
  },

  {
    path: `/inventories/driver-checklist`,
    element: <DriverCheckSheet />,
  },
]);

function Main() {
  const [user, setUser] = useState<User | null>(null);
  const updateUser = (user: User | null) => {
    setUser(user);

    if (user) {
      api.updateUser(user);
    }
  };

  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser != null) {
      setUser(loggedInUser);
    } else {
      <Navigate to="/login"></Navigate>;
    }
  }, []);

  console.log("User ", user);

  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
        <SetUserContext.Provider value={updateUser}>
          <RouterProvider router={router} />
          {/* <App /> */}
        </SetUserContext.Provider>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
