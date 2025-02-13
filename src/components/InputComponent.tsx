import { TextField, Paper } from '@mui/material'
import { useForm } from 'react-hook-form'

const InputComponent = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <Paper elevation={1}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
            id="numero de dni" 
            label="numero de dni" 
            variant="outlined"
            fullWidth
            margin='normal'
            {...register('dni', {required: "DNI requerido"})}
            error={!!errors.dni}
            helperText={errors.dni?.message}
            />
        </form>
    </Paper>
  )
}

export default InputComponent