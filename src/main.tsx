import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Profile from "./pages/protected/Profile.tsx";
import Dashboard from "./pages/protected/Dashboard.tsx";
import Settings from "./pages/protected/Settings.tsx";
import Landing from "./pages/Landing.tsx";
import LayoutLanding from "./layouts/LayoutLanding.tsx";
import LayoutApp from "./layouts/LayoutApp.tsx";
import Loading from "./pages/Loading.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLanding />,
    children: [{ path: "/", element: <Landing /> }],
  },
  {
    path: "/dashboard",
    element: <LayoutApp />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: "settings", element: <Settings /> }],
      },
      { path: "loading", element: <Loading /> },
      { path: "", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="f527bfdeb7f3423ab0527bdde9700aae"
      domain="https://marbenz.kinde.com"
      redirectUri="https://indashboard.pages.dev/dashboard"
      logoutUri="https://indashboard.pages.dev/dashboard"
    >
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </KindeProvider>
  </React.StrictMode>
);
