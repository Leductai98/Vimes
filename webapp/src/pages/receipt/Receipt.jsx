import React,{useState} from 'react'
import { Container,Grid, Typography } from '@mui/material'
import ReceiptList from './component/ReceiptList'
import CreateButton from './component/CreateButton'
import { getList } from '../../services/APIServices'
import { useEffect } from 'react'

export default function Receipt() {
  const [data,setData]=useState([])

  const getData=async()=>{
    const data= await getList()
    setData(data)
  }
  useEffect(()=>{
   getData()
  },[])

  const handleSetData=(data)=>{
    setData(data)
  }

  return (
 <Container sx={{
  marginTop:'20px'
 }}>

  <CreateButton data={data} onSetData={handleSetData}/>
 
 <Grid>
  <Typography variant='h6' sx={{
    textAlign:'center'
  }}>Danh sách phiếu nhập kho</Typography>
 <ReceiptList data={data}/>
 </Grid>

 </Container>

  )
}
