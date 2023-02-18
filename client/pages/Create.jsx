import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader';

const Create = () => {

    const [autor, setAutor] = useState("")
    const [errors, setErrors] = useState("")

    const createAutor = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/new`, { name: autor });
            if (res.status === 200) {
                alert("Correcto")
                setAutor("")
                setErrors("")
            }
        } catch (error) {
            if (error.response.data.code === 11000) {
                setErrors("El Autor ya existe")
            }
            else {
                setErrors(error.response.data.errors.name.message)
            }
        }
    }

    return (
        <>
            <SubHeader actionTitle="Añadir Autor" btnTxt="Volver" path="/" />
            <Form btnTxt="Añadir" autor={autor} setAutor={setAutor} handleSubmit={createAutor} errors={errors} />
        </>
    )
}

export default Create