export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "number", headerName: "Phone Number", width: 150 },
  { field: "title", headerName: "SMS Title", width: 200 },
  { field: "sms", headerName: "SMS Message", width: 600 },
  { field: "sender", headerName: "SMS Header", width: 150 },
  { field: "email", headerName: "Sender Email", width: 150 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 140,
    renderCell: (params) => {
      return (
          <div>{`${params.row.createdAt?params.row.createdAt.toDate().toDateString(): ''}`}</div>
      );
    },
  },
];

export const smsColumns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "title", headerName: "SMS Title", width: 100 },
  { field: "sms", headerName: "SMS Message", width: 800 },
  { field: "email", headerName: "Added User", width: 250 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    renderCell: (params) => {
      return (
          <div>{`${params.row.createdAt? params.row.createdAt?.toDate().toDateString() : ''}`}</div>
      );
    },
    
  },

];
