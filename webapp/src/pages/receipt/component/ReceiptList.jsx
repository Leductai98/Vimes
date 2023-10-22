import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteReceipt } from "../../../services/APIServices";

export default function ReceiptList(props) {
  const navigate = useNavigate();
  const { data,onSetData } = props;

  const goToDetail = (id) => {
    navigate(`/receipt/${id}`);
  };

  const handleDelete = async ( id) => {
    const data = await deleteReceipt(id);
    onSetData(data)

  };

  const renderDate = (date) => {
    const value = new Date(date).toLocaleString("en-AU");
    return value;
  };
  if (data.length === 0) {
    return (
      <Box>
        <Typography>Không có phiếu nào</Typography>
      </Box>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Đơn vị</TableCell>
            <TableCell align="right">Bộ phận</TableCell>
            <TableCell align="right">Số</TableCell>
            <TableCell align="right">Tên người giao</TableCell>
            <TableCell align="right">Nhập tại kho</TableCell>
            <TableCell align="right">Địa điểm</TableCell>
            <TableCell align="right">Thời gian</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },

                "&:hover": { backgroundColor: "rgb(218,220,224)" },
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row" sx={{}}>
                {row.organize}
              </TableCell>
              <TableCell align="right">{row.dept}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.deliver_name}</TableCell>
              <TableCell align="right">{row.warehouse_name}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{renderDate(row.date)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => {
                    goToDetail(row.id);
                  }}
                >
                  Chi tiết
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    handleDelete(row.id);
                  }}
                >
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
