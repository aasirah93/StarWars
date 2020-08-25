import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Starwars(){
   const url = 'https://swapi.dev/api/planets/3/'
   const [planet, setPlanet] = useState('')

   useEffect(() => {
     axios.get(url)
       .then(response => {
          setPlanet(response.data)
       })
   }, [url])

    return (
        <div>
            
    <h1>name: Yavin IV </h1>
	<h1>rotation_period: 24 </h1>
	<h1> orbital_period: 4818 </h1>
	<h1> diameter: 10200 </h1>
	<h1> climate: temperate, tropical </h1>
	<h1> gravity: 1 standard </h1>
	<h1> terrain: jungle, rainforests </h1>
	<h1> surface_water: 8 </h1>
	<h1> population: 1000 </h1>
           
        </div>
    )
}

export default Starwars;