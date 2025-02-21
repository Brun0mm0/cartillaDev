import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import InputComponent from '../components/InputComponent'

const CartillasPage = () => {
  return (
    <>
    <Box>
      <Typography variant='h6'>Buscar Afiliado</Typography>
    </Box>
        <Box >
            {/* <Typography variant="h4">Cartillas</Typography> */}
          <InputComponent />
         
        </Box>
    </>
  )
}

export default CartillasPage