import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { smsColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import {
  deleteDoc,
  doc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';





const AddDatatable = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // LISTEN (REALTIME)
    const sub = onSnapshot(
      collection(db, "sms"),
      (snapShot) => {
        let list = snapShot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        setData(list);
      },
      (error) => {
        console.log('error');
      }
    );

    return sub;
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "sms", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>

          
            <Button onClick={handleOpen}>Update</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ width: 400 }}>
                <h2 id="parent-modal-title">SMS title</h2>

                <p id="parent-modal-description">
                  SMS Message
                </p>

                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>Submit</Button>
                  
                
                
              </Box>
            </Modal>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        SMS Messages List
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={smsColumns.concat(actionColumn)}
        pageSize={100}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default AddDatatable;
