import { useEffect, useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'
import { getRandomEmoji } from './utils'
import { emojidata } from './emojidata'
import Cluelist from './components/Cluelist/Cluelist'
import { cluedata } from './cluedata'


function App() {
  // const [selectedSquares, setSelectedSquares] = useState([])

  useEffect(() => {
  console.log(getRandomEmoji(emojidata), "random emoji")
  }, [])

  return (
    <div className="App">
      <div className='app-container'>
      <h1>Emojination!</h1>
      <div className='game-container'>
        <Grid />
        <Cluelist clues={cluedata} />
        </div>
      </div>
    </div>
  )
}

export default App
