import React from 'react'

function Starwars({ planet }) {
    return(
        <div>
            {planet.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}



export default Starwars