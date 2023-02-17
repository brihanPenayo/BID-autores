import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div>
            <h1 className='txtBig'>Autor Favorito</h1>
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout