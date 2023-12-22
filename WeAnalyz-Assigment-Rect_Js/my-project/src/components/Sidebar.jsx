import React, { useState } from 'react'


function Sidebar() {
    const [selectMenuItem, setSelectedMenuItem] = useState("dashboard");
    return (
        <div>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0" style={{ background: "#6A676736" }} >
                <div className="h-full px-3 pb-4 overflow-y-auto" style={{ background: "#6A676736" }}>
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => setSelectedMenuItem("dashboard")}>
                            <div href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                {selectMenuItem === "dashboard" && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                    <path d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z" fill="black" />
                                </svg>}
                                <img src="dashboard.png" alt="" />
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </li>
                        <li onClick={() => setSelectedMenuItem("ticket")}>
                            <div href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                {selectMenuItem === "ticket" && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                    <path d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z" fill="black" />
                                </svg>}
                                <img src="ticket.png" alt="" />
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </li>
                        <li onClick={() => setSelectedMenuItem("twoTicket")} >
                            <div href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                {selectMenuItem === "twoTicket" && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                    <path d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z" fill="black" />
                                </svg>}
                                <img src="TwoTickets.png" alt="" />
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
