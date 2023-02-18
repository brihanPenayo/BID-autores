import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import SubHeader from '../components/SubHeader'

const Edit = () => {
    const { id } = useParams();
    const [autor, setAutor] = useState(null)
    const navigate = useNavigate();

    const updateAutor = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8000/edit/${id}`, { name: autor });
            if (res.status === 200) {
                alert("Correcto")
                navigate("/")
            }
        } catch (error) {
            console.log(error);
            alert("error")
        }
    }


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
            {autor && <Form btnTxt="Editar" autor={autor} setAutor={setAutor} handleSubmit={updateAutor} />}
        </>
    )
}

export default Edit