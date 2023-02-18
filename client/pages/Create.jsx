import axios from 'axios';
import React, { useState } from 'react'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader';

const Create = () => {

    const [autor, setAutor] = useState("")

    const createAutor = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/new`, { name: autor });
            if (res.status === 200) {
                alert("Correcto")
                setAutor("")
            }
        } catch (error) {
            console.log(error.response.data)
            alert(error.response.data)
        }
    }

    return (
        <>
            <SubHeader actionTitle="Añadir Autor" btnTxt="Volver" path="/" />
            <Form btnTxt="Añadir" autor={autor} setAutor={setAutor} handleSubmit={createAutor} />
        </>
    )
}

export default Create