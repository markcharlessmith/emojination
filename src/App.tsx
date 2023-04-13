import { useEffect, useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'
import { getRandomEmoji } from './utils'
import { emojidata } from './emojidata'


function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
  console.log(getRandomEmoji(emojidata), "random emoji")
  }, [])

  return (
    <div className="App">
      <h1>Emojination!</h1>
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* </div> */}
      <Grid />
    </div>
  )
}

export default App
