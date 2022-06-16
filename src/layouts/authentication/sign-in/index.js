import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";


// Blox Cure React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Context
import { useUserContext } from 'context/userContext';

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpg";
import { CircularProgress } from "@mui/material";


function Basic() {
  const { getPatient, error, loading } = useUserContext();
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const [errorSB, setErrorSB] = useState(false);
  const [err, setErr] = useState(false);
  const [warn, setWarn] = useState("Invalid Wallet!!!");

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Something is Missing"
      content="File Data is incomplete."
      dateTime="Now"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const handleSubmit = (event) => {
    if ( isFilePicked) {
      event.preventDefault();
      const userID = selectedFile.name.slice(0, -3);
      const fileFromate = selectedFile.name.slice(-2);
      if (fileFromate === 'id'){
        let reader = new FileReader();
        reader.onload = async () => { 
        let data = reader.result;
        try{
          data = {userID:userID, x509Identity: JSON.parse(data)}
          console.log("JSON DATA", data)
          getPatient(data);
        }
        catch{
          setWarn("Invalid Formate!!!");
          setErr(true);
        }
      };
      reader.readAsText(selectedFile);
      }
      else{
        setWarn("Invalid Formate!!!");
        setErr(true);
      }
    }
    else {
      openErrorSB();
    }
  };


  return (
    loading ? <>
      <MDBox sx={{
        'display': 'flex',
        'flex-flow': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'height': '550px'
      }}>
        <CircularProgress style={{
          color: "#007eff",
        }} />
        Loading...
      </MDBox>
    </>
      :
      <BasicLayout image={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Sign in
            </MDTypography>

          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
              <MDInput
                  type="file"
                  name="file"
                  onChange={changeHandler}
                  fullWidth />
                
                {error || err ? <p style={{ "color": "red", "fontSize": "14px" }}>{warn}</p> : ""}
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" onClick={handleSubmit} fullWidth>
                  sign in
                </MDButton>
                {renderErrorSB}
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>

  );
}

export default Basic;
