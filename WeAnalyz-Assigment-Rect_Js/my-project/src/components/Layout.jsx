import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Sidebar />
                <div>
                   <Outlet/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
