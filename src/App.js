import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Blox Cure React example components
import Sidenav from "examples/Sidenav";

// Blox Cure React themes
import theme from "assets/theme";

// Blox Cure React routes
import routes from "routes";

// Blox Cure React contexts
import { useMaterialUIController } from "context";
import { useUserContext } from 'context/userContext';

// Images
import brandDark from "assets/images/favicon.png";

export default function App() {
  const [controller] = useMaterialUIController();
  const { user } = useUserContext();
  console.log(user);
  const {
    direction,
    layout,
    sidenavColor,
  } = controller;
  const { pathname } = useLocation();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
      layout === "dashboard" && (
       user? <>
          <Sidenav
            color={sidenavColor}
            brand={brandDark}
            brandName="Blox Cure"
            routes={routes}
          />
        </>
        :null
    )
      }

      {layout === "vr"}
      <Routes>
        {getRoutes(routes(user))}
        <Route path="*" element={user ? <Navigate to='/dashboard' /> : <Navigate to='/authentication/sign-in' />} />
      </Routes>
    </ThemeProvider>
  );
}
