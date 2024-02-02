import React from 'react'

const Profile = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex justify-between align-middle py-4">
                <h1 className="text-4xl text-white">Profile</h1>
                <div>
                    {/* <ChangePassword />
                    <LogOut /> */}
                </div>
            </div>
            <div className='bg-gray-800 p-5 mb-4 rounded-lg'>
                <div className='flex justify-between flex-wrap '>
                    <div className="w-1/2 text-white mb-3 ">
                        <p>Full Name</p>
                        <p className='text-gray-400'>Not Added</p>
                    </div>
                    <div className="w-1/2 text-white mb-3">
                        <p>Full Name</p>
                        <p className='text-gray-400'>Not Added</p>
                    </div>
                    <div className="w-1/2 text-white mb-3">
                        <p>Full Name</p>
                        <p className='text-gray-400'>Not Added</p>
                    </div>
                </div>
                <button className='bg-sky-500 w-full rounded-lg text-white py-2 text-xl hover:bg-sky-600 duration-500'>Update</button>
            </div>
        </div>
    )
}

export default Profile;