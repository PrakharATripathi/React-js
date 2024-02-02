import React, { useState } from 'react'

const InputCommonComponent = ({ type, name, data, placeholder }) => {
    const [show, setShow] = useState(false);
    // const [isFocus, setIsFocus] = useState(false);

    return (
        <div className='mb-4 relative'>
            <label className='text-lg' htmlFor="">{placeholder} :-</label>
            <input
                className='shadow appearance-none border rounded w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg  focus:border-blue-500'
                value={data.values[name]}
                onChange={data.handleChange}
                onBlur={data.handleBlur}
                // onFocus={() => setIsFocus(true)}
                // onBlur={() => data.values[name].trim() === "" ? setIsFocus(false) : false}
                type={type === "password" ? (show ? 'text' : 'password') : type}
                name={name}
                placeholder={placeholder} />
            {data.touched[name] && data.errors[name] && <p className='text-lg text-red-600 text-left mb-2'>{data.errors[name]}</p>}
            {type === "password" ? (
                show ? (<i className="fa-solid fa-eye absolute right-4 top-8 text-xl cursor-pointer" onClick={() => setShow(pre => !pre)}></i>) : (
                    <i className="fa-solid fa-eye-slash absolute right-4 top-8 text-xl cursor-pointer" onClick={() => setShow(pre => !pre)}></i>)
            ) : (false)}
        </div>
    )
}
export default InputCommonComponent;