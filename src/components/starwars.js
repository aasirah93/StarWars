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
            <h1>Planet Name = {planet.name}</h1>
            <h1>rotation period = {planet.rotation_period}</h1>
        </div>
    )
}

export default Starwars;