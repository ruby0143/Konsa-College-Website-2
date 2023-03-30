import React, { useState } from 'react';
import Box from "@mui/material/Box"
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'Institute', headerName: 'Institute', width: 320 },
  { field: 'Academic_Program_Name', headerName: 'Program', width: 380 },
  { field: 'Year', headerName: 'Year', width: 120 },
  {
    field: 'Round',
    headerName: 'Round',
    width: 120,
  },
  {
    field: 'Opening_Rank',
    headerName: 'Opening Rank',
    width: 120,
  },
  {
    field: 'Closing_Rank',
    headerName: 'Closing Rank',
    width: 120,
  }
];



export default function BasicEditingGrid(props) {
  let rows = [];
  props.data.forEach((element, idx) => {
    element.id = idx;
    rows.push(element);
  });
  return (


    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rowHeight={55}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

  );
}