import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Form = ({ btnTxt, autor, setAutor, handleSubmit, errors}) => {

  const handleChange = e => {
    setAutor(e.target.value)
  }

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      <TextField
        label="Nombre y Apellido"
        variant="outlined"
        value={autor}
        onChange={handleChange}
        error={errors ? true : false}
        helperText={errors ? errors : ""} />
      <div className='flx'>
        <Link to="/"><Button variant="contained" disableElevation>Cancelar</Button></Link>
        <Button variant="contained" type='submit' disableElevation>{btnTxt}</Button>
      </div>
    </form>
  )
}

export default Form