import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Form = ({ btnTxt, initialValues, handleSubmit }) => {

  const [name, setName] = useState(initialValues);

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      <TextField label="Nombre y Apellido" variant="outlined" value={name} onChange={handleChange} />
      <div className='flx'>
        <Link to="/"><Button variant="contained" disableElevation>Cancelar</Button></Link>
        <Button variant="contained" type='submit' disableElevation>{btnTxt}</Button>
      </div>
    </form>
  )
}

export default Form