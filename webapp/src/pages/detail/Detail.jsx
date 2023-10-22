import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Container,Box } from '@mui/system'
import React from 'react'
import DetailContent from './component/DetailContent'



export default function Detail() {
 

  return (
    <Container sx={{
        marginTop:"20px"
    }}>
        <Link to='/receipt'>Quay lại</Link>
       <DetailContent/>
    </Container>
  )
}
