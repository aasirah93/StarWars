import React, { useState, useEffect } from 'react';
import Starwars from './components/starwars'
import Pagination from './components/pagination'
import axios from 'axios'
import './App.css';

function App() {
  
  const [planet, setPlanet] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = usestate("https://swapi.dev/api/planets/")


  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
    setPlanet(res.data.results.map(p => p.name))
  })
}, [])

  return (
    <div>
      <Starwars planet={planet}/>
      <Pagination/>
    </div>
  );
}

export default App;
