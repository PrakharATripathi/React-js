import React from 'react'
import { Link } from 'react-router-dom'

function BerrCard({ beer }) {
    return (
        <Link to={`detail/${beer.id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-52">
                    <img
                        src={beer.image_url}
                        alt={beer.name}
                        className="h-full w-full object-contain object-center group-hover:opacity-75  transition-opacity duration-300"
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{beer.name}</div>
                    <p className="text-gray-700 text-base">{beer.tagline}</p>
                </div>
            </div>
        </Link>
    )
}

export default BerrCard