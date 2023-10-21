import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CreateDeTail from "./CreateDetail";

export default function DetailContent() {
  const [data, setData] = useState([]);

  const handleSetData = (data) => {
    setData(data);
  };

  return (
    <Grid
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <Typography>Đơn vị: ABC</Typography>
        <Typography>Bộ phận: ABC</Typography>
      </Box>
      <Box>
        <Card>
          <CardHeader
            title="PHIẾU NHẬP KHO"
            sx={{
              textAlign: "center",
            }}
          />
          <CardContent>
            <Typography>Thời gian</Typography>
            <Typography>Số</Typography>
            <Typography>Nhập tại kho</Typography>
            <Typography>Địa điểm</Typography>
            <Typography>Họ tên người giao</Typography>
            <Typography>Người lập phiếu</Typography>
            <Typography>Thủ kho</Typography>
            <Typography>Kế toán trưởng</Typography>
            <CreateDeTail data={data} onSetData={handleSetData} />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell align="right">Tên</TableCell>
                    <TableCell align="right">Mã số</TableCell>
                    <TableCell align="right">Đơn vị tính</TableCell>
                    <TableCell align="right">Số lượng theo chứng từ</TableCell>
                    <TableCell align="right">Số lượng thực nhập</TableCell>
                    <TableCell align="right">Đơn giá</TableCell>
                    <TableCell align="right">Thành tiền</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right"> {row.name}</TableCell>
                      <TableCell align="right"> {row.codeNumber}</TableCell>
                      <TableCell align="right"> {row.unit}C</TableCell>
                      <TableCell align="right"> {row.count}</TableCell>
                      <TableCell align="right"> {row.realCount}C</TableCell>
                      <TableCell align="right"> {row.price}</TableCell>
                      <TableCell align="right">
                        {" "}
                        {`${row.realCount * row.price} ${row.unit}`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
