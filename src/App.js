import React from 'react';
import './App.css';
import Header from './components/Header'
import Data from './components/Data'
import TravelCard from './components/TravelCard'

function App() {
  const travelCards = Data.map(item => {
      return (
        <TravelCard 
          key = {item.id}
          item = {item} />
      )
  })

  return (
    <div className="App">
      <Header />
      <div className="mainSection">
        {travelCards}
      </div>
    </div>
  )
}

export default App;
