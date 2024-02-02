import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartComponent from './CartComponent';

function Header() {
    const [cartCom,setCartCom] = useState(false)
    function removeUser() {
        let a = window.confirm("are you Sure");
        if(a){
            localStorage.removeItem('token')
        }
    }
    return (
        <div className=' text-white'>
            <header className="shadow sticky z-50 top-0">
                <nav className=" bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto ">
                        <Link to="/" className="flex items-center">
                            {/* <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            /> */}
                        </Link>
                        <div
                            className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/user"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Profile
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="flex items-center justify-between lg:order-2">
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `"text-white  hover:bg-red-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isActive ? "text-orange-700" : "text-gray-700"} `
                                }
                                onClick={removeUser}
                            >
                                LogOut
                            </NavLink>
                            <NavLink
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                onClick={()=>setCartCom(true)}
                            >
                                <span className='flex text-lg'><AiOutlineShoppingCart className=' text-3xl' />cart</span>
                            </NavLink>
                        </div>

                    </div>
                </nav>
            </header>
           {cartCom && <CartComponent setCartCom={setCartCom}/>}
        </div>
    )
}

export default Header