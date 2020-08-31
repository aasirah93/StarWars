import React, { useState, useEffect } from 'react';
import Starwars from './components/starwars'
import Pagination from './components/pagination'
import Searchbar from './components/searchbar'
import axios from 'axios'
import './App.css';

function App() {
  
  const [planet, setPlanet] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://swapi.dev/api/planets/")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()


  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPlanet(res.data.results.map(p => p.name))
  })
}, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <div>
      <Searchbar planet={planet}/> 
      <Starwars planet={planet}/>
      <Pagination
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>
    </div>
  );
}

export default App;
