import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import fetchData from './fetchData';

function ProductDetails() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchDatas() {
            const data = await fetchData();
            setData(data)
        }
        fetchDatas();
    }, [])
    const foundItem = data.find(item => item.id === Number(id));
    console.log(foundItem)
    return (
        <>
        <div className='m-2'>
            <button className='bg-blue-500 p-2 text-white' onClick={()=>navigate("/")}>Back to Home</button>
        </div>
            <div className="container mx-auto">
                {foundItem && (
                    <div className="flex">
                        <div className="h-screen w-2/4">
                            <img
                                src={foundItem.image_url}
                                alt={foundItem.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-1/2 px-6 py-4">
                            <h2 className="text-3xl font-bold mb-2 ">{foundItem.name}</h2>
                            <p className="text-gray-700 text-base ">{foundItem.tagline}</p>
                            <p className="text-gray-700 text-xl p-2">description:{foundItem.description}</p> 
                            <p className="text-gray-700 text-xl p-2">Tipse:{foundItem.brewers_tips}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails