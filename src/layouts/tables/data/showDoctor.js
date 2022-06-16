import React from "react";

// React example components
import DataTable from "examples/Tables/DataTable";

// Context
import { useUserContext } from "context/userContext";

// Data
import doctorsTableData from "layouts/tables/data/doctorsTableData";

function ShowDoctor() {
  const { patients } = useUserContext();
  const { columns, rows } = doctorsTableData({ patients });

  return (
    <DataTable
      table={{ columns, rows }}
      isSorted={false}
      entriesPerPage={false}
      showTotalEntries={false}
      noEndBorder
    />
  );
}

export default ShowDoctor;
