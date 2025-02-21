import { TextField, Stack, IconButton, Icon } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import {findUsers} from '../store/slices/ReqRes/thunks'

const InputComponent = () => {

    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data: any) => {
        dispatch(findUsers(data.dni))
        reset()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction="row" margin={2}>
          <TextField 
              color='primary'
              id="numero de dni" 
              label="Buscar por n° de DNI" 
              variant="outlined"
              fullWidth
              margin='normal'
              {...register('dni', {required: "DNI requerido"})}
              error={!!errors.dni}
            //   helperText={errors.dni?.message}
              />
              <IconButton type="submit" color='primary'>
                <SearchIcon overlap="circular"/>
              </IconButton>
      </Stack>
    </form>
  )
}

export default InputComponent