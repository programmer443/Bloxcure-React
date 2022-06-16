// Blox Cure React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import Patient from "layouts/patient";
import Doctor from "layouts/doctor";
import { Navigate } from "react-router-dom";

const routes = (user) =>{ 
  console.log(user, "roytes");
  return[
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: user?<Dashboard />:<Navigate to="/authentication/sign-in"/>,
  },
  {
    type: "collapse",
    name: "Patient",
    key: "patient",
    icon: <Icon fontSize="small">personal_injury</Icon>,
    route: "/patient",
    component:  user?<Patient />:<Navigate to="/authentication/sign-in"/>,
  },
  {
    type: "collapse",
    name: "Doctor",
    key: "doctor",
    icon: <Icon fontSize="small">person_add_alt</Icon>,
    route: "/doctor",
    component: user?<Doctor />:<Navigate to="/authentication/sign-in"/>,
  },
  {
    type: "collapse",
    name: "User List",
    key: "users",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    component:  user?<Tables />:<Navigate to="/authentication/sign-in"/>,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: user?<Navigate to="/dashboard"/>:<SignIn />,
  },

]};

export default routes;
