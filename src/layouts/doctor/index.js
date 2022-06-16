import React, { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import MDDrop from "components/MDSelect/MDSelectRoot";

// Context
import { useUserContext } from "context/userContext";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const defaultValues = {
  firstName: "",
  lastName: "",
  speciality: "",
  gender: "",
  phoneNumber: "",
  CNIC: "",
};
const gender = ["Male", "Female", "Other"];

const Doctor = () => {
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const [successSB, setSuccessSB] = useState(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const [errorSB, setErrorSB] = useState(false);
  const { enrollDoctor } = useUserContext();
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Saved Successfully"
      content="Doctor Data is saved Successfully!"
      dateTime="Now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Something is Missing"
      content="Doctor Data is incomplete."
      dateTime="Now"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  const handleSubmit = (event) => {
    if (
      formValues.firstName &&
      formValues.lastName &&
      formValues.speciality &&
      formValues.gender &&
      formValues.phoneNumber &&
      formValues.CNIC
    ) {
      event.preventDefault();
    //   console.log(formValues);
      enrollDoctor(formValues);
      setFormValues(defaultValues);
      openSuccessSB();
    } else {
      openErrorSB();
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <form onSubmit={handleSubmit}>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={3}
            py={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Doctor Data
            </MDTypography>
            <MDTypography variant="button" color="white" fontWeight="regular">
              Enter Doctor Details. All fields are required.
            </MDTypography>
          </MDBox>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            component="form"
            mb={5}
            mt={7}
            sx={{
              "& > :not(style)": { m: 3, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              name="firstName"
              variant="outlined"
              value={formValues.firstName}
              onChange={handleInputChange}
              style={{ flex: "0 1 40%" }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              name="lastName"
              variant="outlined"
              value={formValues.lastName}
              onChange={handleInputChange}
              style={{ flex: "0 1 40%" }}
            />
            <TextField
              id="outlined-basic"
              label="Speciality"
              name="speciality"
              variant="outlined"
              value={formValues.speciality}
              onChange={handleInputChange}
              style={{ flex: "0 1 40%" }}
            />

            <MDBox mb={2} style={{ flex: "0 1 40%" }}>
              <MDDrop
                label="Gender"
                onChange={handleInputChange}
                value={formValues.gender}
                role={gender}
              />
            </MDBox>
            <TextField
              label="Contact Number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              style={{ flex: "0 1 40%" }}
            />
            <TextField
              label="CNIC"
              name="CNIC"
              type="tel"
              value={formValues.CNIC}
              onChange={handleInputChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              style={{ flex: "0 1 40%" }}
            />
            <>
              <MDButton variant="gradient" color="info" onClick={handleSubmit}>
                Register
              </MDButton>
              {renderSuccessSB}
              {renderErrorSB}
            </>
            <MDButton variant="gradient" color="info">
              Cancle
            </MDButton>
          </Box>
        </form>
      </Card>
      <Footer />
    </DashboardLayout>
  );
};
export default Doctor;
