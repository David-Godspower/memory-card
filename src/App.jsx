import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    console.log("App mounted! Ready to fetch...");
  }, []);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>Score: {score} | Best Score: {bestScore}</p>
    </div>
  )
}

export default App