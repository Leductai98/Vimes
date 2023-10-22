import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import CreateDeTail from "./CreateDetail";
import { useEffect } from "react";
import { getDetail,deleteProduct } from "../../../services/APIServices";

export default function DetailContent() {
  const { id } = useParams();
  const [receiptData, setReceiptData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getReceiptData(id);
  }, []);

  useEffect(() => {
    let total = 0;
    productsData.forEach((product) => {
      const value = product.price * product.real_count;
      total += value;
    });
    setTotal(total);
  }, [productsData]);

  const getReceiptData = async (id) => {
    const data = await getDetail(id);
    setReceiptData(data.receipt);
    setProductsData(data.products);
  };

  const handleSetProductsData = (data) => {
    setProductsData(data);
  };

  const handleDelete = async(id,receiptId)=>{
    await deleteProduct(id);
    await getReceiptData(receiptId)
  }
  const date = receiptData.date? new Date(receiptData.date).toLocaleString('en-AU'):""
  return (
    <Grid
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <Typography>
          Đơn vị:{" "}
          <Typography
            variant="span"
            sx={{
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {" "}
            {receiptData.organize}
          </Typography>
        </Typography>
        <Typography>
          Bộ phận:{" "}
          <Typography
            variant="span"
            sx={{
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {" "}
            {receiptData.dept}
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Card sx={{
            boxShadow:"none"
          }}>
          <CardHeader
            title="PHIẾU NHẬP KHO"
            sx={{
              textAlign: "center",
            }}
          />
          <CardContent >
            <Typography>
              Thời gian:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {date}
              </Typography>
            </Typography>
            <Typography>
              Số:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.number}
              </Typography>
            </Typography>
            <Typography>
              Nhập tại kho:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.warehouse_name}
              </Typography>
            </Typography>
            <Typography>
              Địa điểm:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.location}
              </Typography>
            </Typography>
            <Typography>
              Họ tên người giao:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.deliver_name}
              </Typography>
            </Typography>
            <Typography>
              Người lập phiếu:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.maker_name}
              </Typography>
            </Typography>
            <Typography>
              Thủ kho:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.owner_warehouse_name}
              </Typography>
            </Typography>
            <Typography>
              Kế toán trưởng:
              <Typography
                variant="span"
                sx={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {receiptData.account_name}
              </Typography>
            </Typography>
            <CreateDeTail
              id={id}
              data={productsData}
              onSetProductData={handleSetProductsData}
            />
            {productsData.length === 0 ? (
              <div>Không có sản phẩm nào</div>
            ) : (
              <>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell align="right">Tên</TableCell>
                        <TableCell align="right">Mã số</TableCell>
                        <TableCell align="right">Đơn vị tính</TableCell>
                        <TableCell align="right">
                          Số lượng theo chứng từ
                        </TableCell>
                        <TableCell align="right">Số lượng thực nhập</TableCell>
                        <TableCell align="right">Đơn giá</TableCell>
                        <TableCell align="right">Thành tiền</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productsData.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell align="right"> {row.name}</TableCell>
                          <TableCell align="right">
                            {" "}
                            {row.code_number}
                          </TableCell>
                          <TableCell align="right"> {row.unit}</TableCell>
                          <TableCell align="right"> {row.count}</TableCell>
                          <TableCell align="right"> {row.real_count}</TableCell>
                          <TableCell align="right"> {row.price}</TableCell>
                          <TableCell align="right">
                            {" "}
                            {`${row.real_count * row.price}`}
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Button
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                              onClick={()=>{
                                handleDelete(row.id,id)
                              }}
                            >Xóa</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  Tổng tiền:
                  <Typography
                    variant="span"
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    {total}
                  </Typography>
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
