import React from 'react'

function Pagination({ nextPlanet, prevPlanet }) {
    return (
        <div>
            <button onClick={prevPlanet}>Previous</button>
            <button onClick={nextPlanet}>Next</button>
        </div>
    )
}

export default Pagination;