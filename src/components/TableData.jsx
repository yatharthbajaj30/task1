// DataTable.js
import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import  { useState } from 'react';


const columns = [
  {
    name: 'ID',
    selector: 'unnamed:0',
    sortable: true,
    maxWidth: '50vw'
  },
  {
    name: 'Name',
    selector: 'Transformer - Bushing C1 Tests',
    sortable: true,
    maxWidth: '500px'
  },
  {
    name: 'Email',
    selector: 'Unnamed: 1',
    sortable: true,
    maxWidth: '50vw'
  },
  {
    name: 'Email',
    selector: 'Unnamed: 2',
    sortable: true,
    maxWidth: '50vw'
  },
  // Add more columns as needed
];

// const data = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
//   // Add more data rows as needed
// ];

// const TableData = () => {
//   const[data,setdata]=useState([]);
//   useEffect(()=>{
//     fetch('combined_data.json')
//     .then(response=>response.json())
//     .then(data=>setdata(data))
    
//   },[])

function TableData() {
     const[data,setdata]=useState([]);
  useEffect(() => {
    fetch('src/combined_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setdata(data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);

  return (
   <div style={{zIndex:'0'}}>
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      pagination
      selectableRows
      scrollX:true
    />
     </div>
  );
};

export default TableData;
