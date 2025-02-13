import { TextField, Stack, IconButton, Icon } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form'

const InputComponent = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction="row" margin={2}>
          <TextField 
              color='primary'
              id="numero de dni" 
              label="numero de dni" 
              variant="outlined"
              fullWidth
              margin='normal'
              {...register('dni', {required: "DNI requerido"})}
              error={!!errors.dni}
              helperText={errors.dni?.message}
              />
              <IconButton type="submit" color='primary'>
                <SearchIcon overlap="circular"/>
              </IconButton>
      </Stack>
    </form>
  )
}

export default InputComponent