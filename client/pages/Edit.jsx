import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader'

const Edit = () => {
    const { id } = useParams();
    const [autor, setAutor] = useState(null)

    useEffect(() => {
        const getAutors = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/${id}`)
                setAutor(res.data.name)
            } catch (error) {
                console.log(error.message)
            }
        }
        getAutors();
    }, [])


    return (
        <>
            <SubHeader actionTitle="Editar Autor" btnTxt="Volver" path="/" />
            {autor != null && <Form btnTxt="Editar" initialValues={autor} />}
        </>
    )
}

export default Edit