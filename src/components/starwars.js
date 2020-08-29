import React from 'react'

function Starwars({ planet }) {
    return(
        <div>
          <header> 
               <h1>Planets
               </h1>
            </header>
            {planet.map(p => (
            <div key={p}><h5>{p}</h5></div>
            ))}
        </div>
    )
}



export default Starwars