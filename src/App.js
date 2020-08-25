import React, { useState, useEffect } from 'react';
import Starwars from './components/starwars'
import Pagination from './components/pagination'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Starwars/>
      <Pagination/>
    </div>
  );
}

export default App;
