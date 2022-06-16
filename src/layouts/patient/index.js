import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDDrop from "components/MDSelect/MDSelectRoot";
import MDSnackbar from "components/MDSnackbar";

// Context
import { useUserContext } from "context/userContext";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const defaultValues = {
  firstName: "",
  lastName: "",
  birthDate: new Date().toString(),
  address: "",
  gender: "",
  blood: "",
  phoneNumber: "",
  emergPhoneNumber: "",
  CNIC: "",
  nationality: "",
};
const gender = ["Male", "Female", "Other"];
const blood = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"];

const Patient = () => {
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const [successSB, setSuccessSB] = useState(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const [errorSB, setErrorSB] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);
  const { enrollPatient } = useUserContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDate = (e) => {
    setFormValues({ ...formValues, birthDate: new Date(e) });
  };

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Sent Successfully"
      content="Patient Data is sent Successfully!"
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
      content="Patient Data is incomplete."
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
      formValues.address &&
      formValues.gender &&
      formValues.blood &&
      formValues.phoneNumber &&
      formValues.emergPhoneNumber &&
      formValues.CNIC &&
      formValues.nationality
    ) {
      event.preventDefault();
    //   console.log(formValues);
      enrollPatient(formValues);
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
              Patient Data
            </MDTypography>
            <MDTypography variant="button" color="white" fontWeight="regular">
              Enter Patient Detail. All fields are required.
            </MDTypography>
          </MDBox>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            component="form"
            mb={20}
            mt={4}
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
              label="Nationality"
              name="nationality"
              variant="outlined"
              value={formValues.nationality}
              onChange={handleInputChange}
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Date of Birth"
                name="birthDate"
                value={formValues.birthDate.toString()}
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} style={{ flex: "0 1 40%" }} />}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Address"
              name="address"
              type="textarea"
              variant="outlined"
              onChange={handleInputChange}
              value={formValues.address}
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
              type="tel"
              onChange={handleInputChange}
              value={formValues.phoneNumber}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              style={{ flex: "0 1 40%" }}
            />
            <MDBox mb={2} style={{ flex: "0 1 40%" }}>
              <MDDrop
                label="Blood"
                onChange={handleInputChange}
                value={formValues.blood}
                role={blood}
              />
            </MDBox>
            <TextField
              label="Emergency Number"
              name="emergPhoneNumber"
              type="tel"
              value={formValues.emergPhoneNumber}
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
            <MDButton variant="gradient" color="info" onClick={() => setFormValues(defaultValues)}>
              Cancel
            </MDButton>
          </Box>
        </form>
      </Card>
      <Footer style={{ marginTop: "2rem" }} />
    </DashboardLayout>
  );
};
export default Patient;

// Patient.propTypes = {
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     birthDate: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     phoneNumber: PropTypes.string.isRequired,
//     emergPhoneNumber: PropTypes.string.isRequired,
// };
