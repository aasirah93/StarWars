import React from 'react'


function Starwars({ planet }) {
    return(
        <div>
            {planet.map(p => (
            <div key={p}><h5>{p}</h5></div>
            ))}
        </div>
    )
}



export default Starwars