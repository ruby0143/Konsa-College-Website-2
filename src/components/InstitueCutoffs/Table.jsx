import React, { useState } from 'react';
import Box from "@mui/material/Box"
import { DataGrid } from '@mui/x-data-grid';
import { Table } from 'antd';


const columns = [
  {
    dataIndex: 'Institute', title: 'Institute', width: 320, sorter: (a, b) => {
      let s1 = a.Institute, s2 = b.Institute;
      return s1.localeCompare(b);
    }
  },
  {
    dataIndex: 'Academic_Program_Name', title: 'Program', width: 380
  },
  { dataIndex: 'Year', title: 'Year', width: 120, sorter: (a, b) => a.Year - b.Year },
  {
    dataIndex: 'Round',
    title: 'Round',
    width: 120,
    sorter: (a, b) => a.Round - b.Round,
  },
  {
    dataIndex: 'Opening_Rank',
    title: 'Opening Rank',
    width: 120,
    sorter: (a, b) => a.Opening_Rank - b.Opening_Rank,
  },
  {
    dataIndex: 'Closing_Rank',
    title: 'Closing Rank',
    width: 120,
    sorter: (a, b) => a.Closing_Rank - b.Closing_Rank,
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


export default function BasicEditingGrid(props) {
  let rows = [];
  props.data.forEach((element, idx) => {
    element.id = idx;
    rows.push(element);
  });

  return (
    <Table columns={columns} dataSource={rows} onChange={onChange} pagination={{
      pageSize: 5
    }} scroll={{
     
    }} />
  );
}