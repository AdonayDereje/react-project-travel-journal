import React from 'react';
import './App.css';
import TravelCard from './components/TravelCard'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainSection">
        <TravelCard />
      </div>
    </div>
  )
}

export default App;
