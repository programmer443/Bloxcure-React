// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/patinet.png";

export default function data({patients}) {
  const Author = ({ image, name, pid }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="warning">{pid}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption" color="info">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "info", accessor: "info", width: "45%", align: "left" },
      { Header: "Organization", accessor: "organization", align: "left" },
      { Header: "gender", accessor: "gender", align: "center" },
      { Header: "Phone Number", accessor: "number", align: "center" },
      { Header: "Emergency Number", accessor: "Emergency", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: 
    patients ? patients.patients.patients.map((patient) => (
      {
        info: <Author image={team2} name={patient.firstName + ' ' + patient.lastName } pid={patient.patientID} />,
        organization: <Job title="CARE" description={patient.mspID} />,
        gender: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {patient.gender}
          </MDTypography>
        ),
        number: (
          <MDTypography variant="caption" color="success" fontWeight="medium">
            {patient.phoneNumber}
          </MDTypography>
        ),
        Emergency: (
          <MDTypography variant="caption" color="success" fontWeight="medium">
            {patient.emergPhoneNumber}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      }
    )):
    []
  };
}
