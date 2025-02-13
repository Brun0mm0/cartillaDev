import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import InputComponent from '../components/InputComponent'

const CartillasPage = () => {
  return (
    <>
    <Box>
      <Typography variant='h5'>Gestione base de datos de las credenciales</Typography>
    </Box>
    <Stack 
    spacing={2} 
    direction="row"
    sx={{
      flex:1,
      justifyContent: 'center',
      // alignItems: 'stretch',
    }}>
        <Box sx={{flex:1}}>
            {/* <Typography variant="h4">Cartillas</Typography> */}
          <InputComponent />
         
        </Box>
        <Box sx={{flex:.5}}>
            <Typography variant="h4">Cartillas</Typography>
        </Box>
    </Stack>
    </>
  )
}

export default CartillasPage