import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Institute', headerName: 'Institute', width: 350 },
  { field: 'Academic_Program_Name', headerName: 'Program', width: 350 },
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



export default function DataTable(props) {
  let rows = [];
  props.data.forEach((element, idx) => {
    element.id = idx;
    rows.push(element);
  });
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rowHeight={55}
 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}