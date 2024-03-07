import React from 'react';
import { useState, useEffect } from 'react';
import bubbleSort from './Algorithms/bubbleSort';
import animateBubbleSort from './Animations/animateBubbleSort';
import BarsContainer from './Components/BarsContainer';

function App() {
  const [arrayLength, setArrayLength] = useState(50);
  const [array, setArray] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [move, setMove] = useState({});
  const [timeoutId, setTimeoutId] = useState(null);

  function generateArray(length) {
    const newArray = [];
    for (let i = 0; i < length; i++) {
      newArray[i] = Math.random();
    }
    setArray(newArray);
  }

  useEffect(() => {
    generateArray(arrayLength);
  }, []);

  function handleSliderChange(e) {
    const sliderValue = parseInt(e.target.value);
    generateArray(sliderValue);
    setArrayLength(sliderValue);
  }

  function handleBubbleSortClick() {
    setButtonClicked(true);
    const copy = [...array];
    const { sortedArray, moves } = bubbleSort(copy);
    setSortedArr([...sortedArray]);

    animateBubbleSort(array, moves, setSortedArr, setMove, setTimeoutId, arrayLength);

    setTimeout(() => {
      setSortedArr(sortedArray);
    }, moves.length * 50);
  }

  function handleResetClick() {
    reset();
  }

  function reset() {
    setArrayLength(50);
    setArray([]);
    setSortedArr([]);
    setButtonClicked(false);
    generateArray(50);
    setMove({});
    clearTimeout(timeoutId);
  }

  return (
    <>
      <h1>Sorting Algorithm Visualization</h1>
      <div className="slider_container">
        <h2>Change Array Size & Speed:</h2>
        <input
          type="range"
          min="10"
          max="100"
          value={arrayLength}
          onChange={handleSliderChange}
          disabled={buttonClicked}
        />
      </div>

      <BarsContainer array={array} move={move} />

      <div className="btn_container">
        <button onClick={handleBubbleSortClick} disabled={buttonClicked} className="btn">
          Bubble Sort
        </button>
        <button onClick={handleResetClick} className="btn">
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
