import React from 'react'

function Forgot() {
    return (
        <div>
            <div className='h-screen w-screen flex justify-center items-center ' style={{ background: "#55D6C2" }}>
                <div className='h-4/6 w-1/2 flex items-center justify-center' style={{ background: "#EFEDED80" }}>
                    <div className='h-5/6 w-4/5 text-center flex flex-col items-center' >
                        <div className='m-2 pt-5 pb-3'>
                            <p className='text-md '>
                                Don’t worry, Enter your email below and we will
                                send you a link to change password.
                            </p>
                        </div>
                        <div className='m-2 w-full'>
                            <input type="text" className='border-2 border-gray-400 px-2 py-1.5 w-5/6 outline-none' placeholder="Email" />
                        </div>
                        <div className='mt-5 w-full'>
                            <button className='p-2 rounded-md w-1/3 text-white' style={{ background: "#03CC17" }}>Sign in</button>
                        </div>
                        <div className='mt-5 w-full'>
                            <button className='p-2 rounded-md w-1/3 text-white' style={{ background: "#296EF2" }}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot;
