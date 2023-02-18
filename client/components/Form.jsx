import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Form = ({ btnTxt, initialValues, handleSs }) => {

  const [input, setInput] = useState(initialValues)
  // setInput(initialValues)
  console.log(input + " Hola ")

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleSs(input)
    setInput("")
  }

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      <TextField label="Nombre y Apellido" variant="outlined" value={input} onChange={handleChange} />
      <div className='flx'>
        <Link to="/"><Button variant="contained" disableElevation>Cancelar</Button></Link>
        <Button variant="contained" type='submit' disableElevation>{btnTxt}</Button>
      </div>
    </form>
  )
}

export default Form