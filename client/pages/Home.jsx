import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';
import SubHeader from '../components/SubHeader';
import { Link } from 'react-router-dom';

const Home = () => {
  const [autors, setAutors] = useState([]);

  const handleBorrar = async e => {
    try {
      const res = axios.delete(`http://localhost:8000/delete/${e.target.id}`)
      alert("Autor Eliminado")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getAutors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/all")
        setAutors(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getAutors();
  }, [handleBorrar])

  return (
    <>
      <SubHeader actionTitle="Lista de Autores" btnTxt="Añadir" path="/new" />
      {autors.map((autor, idx) => {
        return (
          <div key={idx} className="flx lftSide lnBtm">
            <h2>{autor.name}</h2>
            <div>
              <Link to={`/edit/${autor._id}`}><Button>Editar</Button></Link>
              <Button id={autor._id} onClick={handleBorrar}>Borrar</Button>
            </div>
          </div>
        )
      })}
    </>
  )

}

export default Home