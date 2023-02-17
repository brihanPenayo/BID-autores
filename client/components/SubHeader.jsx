import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = ({ actionTitle, btnTxt, path }) => {
  return (
    <div className='flx lftSide'>
      <h1>{actionTitle}</h1>
      <Link to={path}><Button variant='contained'>{btnTxt}</Button></Link>
    </div>
  )
}

export default SubHeader