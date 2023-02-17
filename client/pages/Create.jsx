import axios from 'axios';
import React, { useState } from 'react'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader';

const Create = () => {

    // const [autor, setAutor] = useState("")

    const createAutor = async (name) => {
        try {
            const res = await axios.post(`http://localhost:8000/new`, name);
            console.log(res);
            if (res.status === 200) {
                alert("Correcto")
            }
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }

    return (
        <>
            <SubHeader actionTitle="Añadir Autor" btnTxt="Volver" path="/" />
            <Form btnTxt="Añadir" initialValues={""} handleSubmit={createAutor}/>
        </>
    )
}

export default Create