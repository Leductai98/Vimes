import React from "react";
import {
  Button,
  Grid,
  Modal,
  Card,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Icon } from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";

import { saveList } from "../../../services/APIServices";

export default function CreateButton(props) {
  const { data, onSetData } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const [organize, setOrganize] = useState("");
  const [dept, setDept] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [deliverName, setDeliverName] = useState("");
  const [warehouseName, setWarehouseName] = useState("");
  const [location, setLocation] = useState("");
  const [makerName, setMakerName] = useState("");
  const [ownerWarehouseName, setOwnerWarehouseName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [disabledCreate, setDisabledCreate] = useState(true);

  useEffect(() => {
    if (
      organize !== "" &&
      dept !== "" &&
      date !== "" &&
      number !== "" &&
      number !== 0 &&
      deliverName !== "" &&
      warehouseName !== "" &&
      location !== "" &&
      makerName !== "" &&
      ownerWarehouseName !== "" &&
      accountName !== ""
    ) {
      setDisabledCreate(false);
    } else {
      setDisabledCreate(true);
    }
  }, [
    organize,
    dept,
    date,
    number,
    deliverName,
    warehouseName,
    location,
    makerName,
    ownerWarehouseName,
    accountName,
  ]);

  const handleChange = (e, type) => {
    const value = e.target.value;
    console.log(value)
    switch (type) {
      case "organize":
        setOrganize(value);
        break;
      case "dept":
        setDept(value);
        break;
      case "date":
        setDate(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "deliverName":
        setDeliverName(value);
        break;
      case "warehouseName":
        setWarehouseName(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "makerName":
        setMakerName(value);
        break;
      case "ownerWarehouseName":
        setOwnerWarehouseName(value);
        break;
      case "accountName":
        setAccountName(value);
        break;
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenSnackBar = () => {
    setIsOpenSnackBar(!isOpenSnackBar);
  };

  const handleCreate = async() => {
    const value = {
      organize,
      dept,
      date,
      number,
      deliverName,
      warehouseName,
      location,
      makerName,
      ownerWarehouseName,
      accountName,
    };
    const data=await saveList(value)
    onSetData(data)

    setIsOpenSnackBar(!isOpenSnackBar);
    setIsOpen(!isOpen);
    setOrganize("");
    setDept("");
    setDate("");
    setNumber("");
    setDeliverName("");
    setWarehouseName("");
    setLocation("");
    setMakerName("");
    setOwnerWarehouseName("");
    setAccountName("");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button variant="contained" onClick={handleOpen}>
        Tạo mới
      </Button>
      <Modal
        open={isOpen}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Card
            sx={{
              backgroundColor: "white",
              width: "700px",
              margin: "auto",
              height: "700px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <CardHeader
              title="Thông tin phiếu"
              sx={{
                textAlign: "center",
              }}
            />
            <CardContent
              sx={{
                marginBottom: "80px",
              }}
            >
              <FormControl
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <TextField
                  id="outlined-controlled"
                  label="Đơn vị"
                  value={organize}
                  onChange={(e) => {
                    handleChange(e, "organize");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Bộ phận"
                  value={dept}
                  onChange={(e) => {
                    handleChange(e, "dept");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  //   label="Thời gian"
                  type="date"
                  value={date}
                  placeholder="dd-mm-yyyy"
                  onChange={(e) => {
                    handleChange(e, "date");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Số"
                  type="number"
                  value={number}
                  onChange={(e) => {
                    handleChange(e, "number");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Họ và tên người giao"
                  value={deliverName}
                  onChange={(e) => {
                    handleChange(e, "deliverName");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Nhập tại kho"
                  value={warehouseName}
                  onChange={(e) => {
                    handleChange(e, "warehouseName");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Địa điểm"
                  value={location}
                  onChange={(e) => {
                    handleChange(e, "location");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Người lập phiếu"
                  value={makerName}
                  onChange={(e) => {
                    handleChange(e, "makerName");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Thủ kho"
                  value={ownerWarehouseName}
                  onChange={(e) => {
                    handleChange(e, "ownerWarehouseName");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Kế toán trưởng"
                  value={accountName}
                  onChange={(e) => {
                    handleChange(e, "accountName");
                  }}
                />
              </FormControl>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: "0",
                left: "10px",
                right: "20px",
                backgroundColor: "#FFFFFF",
              }}
            >
              {" "}
              <Button
                variant="contained"
                size="small"
                sx={{
                  padding: "5px 10px",
                }}
                disabled={disabledCreate}
                onClick={() => {
                  handleCreate();
                }}
              >
                Tạo
              </Button>
              <Button
                size="small"
                sx={{
                  padding: "5px 10px",
                }}
                onClick={() => {
                  handleClose();
                }}
              >
                Hủy
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpenSnackBar}
        autoHideDuration={2000}
        onClose={handleOpenSnackBar}
      >
        <Alert
          onClose={handleOpenSnackBar}
          severity="success"
          sx={{ width: "100%", color: "white", backgroundColor: "green" }}
        >
          Tạo mới thành công
        </Alert>
      </Snackbar>
    </Grid>
  );
}
