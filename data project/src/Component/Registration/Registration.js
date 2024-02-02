import { Formik } from 'formik';
import React, { useState } from 'react'
import InputCommonComponent from '../Common/InputCommonComponent';
import { Link, useNavigate } from 'react-router-dom';   
import { signUpSchema } from './Validate';

const Registration = () => {
    const [stopApi, setStopApi] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = async (values, action) => {
        try {
            let res = await fetch("https://api-qllj.onrender.com/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (res.ok) {
                localStorage.setItem("token", JSON.stringify(values.email));
                navigate("/user");
                setStopApi(true)
            }
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }


    return (
        <Formik
            initialValues={{ fname: "", lname: "", email: "", password: "", confirmPassword: "", role: "user" }}
            onSubmit={(values) => {
                if (stopApi) {
                    handleSubmit(values);
                    setStopApi(false)
                }
            }}
            validationSchema={signUpSchema}
        >
            {props => (
                <div className='w-1/2 bg-white m-auto border-black rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 shadow-2xl'>
                    <form onSubmit={props.handleSubmit} >
                        <div className='flex justify-between gap-4'>
                            <InputCommonComponent name="fname" data={props} type="text" placeholder="Enter Your First Name" />
                            <InputCommonComponent name="lname" data={props} type="text" placeholder="Enter Your Last Name" />
                        </div>
                        <InputCommonComponent name="email" data={props} type="email" placeholder="Enter Your Email" />
                        <InputCommonComponent name="password" data={props} type="password" placeholder="Enter Your Password" />
                        <InputCommonComponent name="confirmPassword" data={props} type="password" placeholder="Confirm Password" />
                        <div className='text-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl text-xl transition duration-200' type='submit'>Register</button>
                            <div className='my-2'>
                                <p className='text-lg'>Already Register <Link className='underline' to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default Registration;