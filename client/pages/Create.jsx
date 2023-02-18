import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader';

const Create = () => {

    const [autor, setAutor] = useState("")
    const [valid, setValid] = useState(false)
    // const [name, setName] = useState("");




    const createAutor = async (name) => {
        // e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/new`, { name: name });
            // console.log(res);
            if (res.status === 200) {
                alert("Correcto")
                // setValid(!valid)
                setAutor("")
                console.log(autor)
            }
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }

    useEffect(() => {
        setAutor("")
    }, [valid])

    return (
        <>
            <SubHeader actionTitle="Añadir Autor" btnTxt="Volver" path="/" />
            <Form btnTxt="Añadir" initialValues={autor} handleSs={createAutor} />
        </>
    )
}

export default Create