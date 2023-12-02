import React, { useEffect, useState } from "react"
import fetchData from "../service/fetchData"
import BeerCard from "./BeerCard";

function Product() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchDatas() {
            const data = await fetchData();
            setData(data)
        }
        fetchDatas();
    }, [])

    const filteredBeers = data.filter((beer) =>
        beer.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="container mx-auto mt-4">
                <h3 className="p-2 font-bold text-2xl">Search product</h3>
                <input
                    type="text"
                    placeholder="Search beers..."
                    className="p-2 border rounded mb-4"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredBeers.map((beer) => (
                            <BeerCard key={beer.id} beer={beer} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product