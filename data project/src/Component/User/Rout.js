import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'


function Rout() {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default Rout