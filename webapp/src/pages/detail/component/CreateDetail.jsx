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

import { useState, useEffect } from "react";

export default function CreateDeTail(props) {
  const {data,onSetData}=props
  console.log(data)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const [name, setName] = useState("");
  const [codeNumber, setCodeNumber] = useState("");
  const [unit, setUnit] = useState("");
  const [count, setCount] = useState("");
  const [realCount, setRealCount] = useState("");
  const [price, setPrice] = useState("");
  const [disabledCreate, setDisabledCreate] = useState(true);

  useEffect(() => {
    if (
      name !== "" &&
      codeNumber !== "" &&
      unit !== "" &&
      count !== "" &&
      count !== 0 &&
      realCount !== 0 &&
      realCount !== "" &&
      price !== "" &&
      price !== 0
    ) {
      setDisabledCreate(false);
    } else {
      setDisabledCreate(true);
    }
  }, [name, codeNumber, unit, count, realCount, price]);

  const handleChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        setName(value);
        break;
      case "codeNumber":
        setCodeNumber(value);
        break;
      case "count":
        setCount(value);
        break;
      case "realCount":
        setRealCount(value);
        break;
      case "unit":
        setUnit(value);
        break;
      case "price":
        setPrice(value);
        break;
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenSnackBar = () => {
    setIsOpenSnackBar(!isOpenSnackBar);
  };

  const handleCreate = () => {
    const value ={
      name,
      codeNumber,
      unit,
      count,
      realCount,
      price
    }
    onSetData([...data,value])

    setIsOpenSnackBar(!isOpenSnackBar);
    setIsOpen(!isOpen);
    setName("");
    setCodeNumber("");
    setUnit("");
    setCount("");
    setRealCount("");
    setPrice("");
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
        Thêm sản phẩm
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
              title="Thông tin sản phẩm"
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
                  label="Tên sản phẩm"
                  value={name}
                  onChange={(e) => {
                    handleChange(e, "name");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Mã số"
                  type="number"
                  value={codeNumber}
                  onChange={(e) => {
                    handleChange(e, "codeNumber");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Đơn vị tính"
                  value={unit}
                  onChange={(e) => {
                    handleChange(e, "unit");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Số lượng theo chứng từ"
                  type="number"
                  value={count}
                  onChange={(e) => {
                    handleChange(e, "count");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  type="number"
                  label="Số lương thực nhập"
                  value={realCount}
                  onChange={(e) => {
                    handleChange(e, "realCount");
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Đơn giá"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    handleChange(e, "price");
                  }}
                />
                <Typography>Thành tiền:{realCount&&price&&`${realCount*price}${unit}`}</Typography>
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
                disabled={disabledCreate}
                sx={{
                  padding: "5px 10px",
                }}
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
        autoHideDuration={3000}
        onClose={handleOpenSnackBar}
      >
        <Alert
          onClose={handleOpenSnackBar}
          severity="success"
          sx={{ width: "100%", color: "white", backgroundColor: "green" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
