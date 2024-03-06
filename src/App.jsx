import React from 'react';
import { useState, useEffect } from 'react';
import bubbleSort from './Algorithms/bubbleSort';
import animateBubbleSort from './Animations/animateBubbleSort';
import BarsContainer from './Components/BarsContainer';

function App() {
  const [arrayLength, setArrayLength] = useState(10);
  const [array, setArray] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [sortedArr, setSortedArr] = useState([]);
  const [moves, setMoves] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

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
    setSorted(true);
    const copy = [...array];
    const { sortedArray, moves } = bubbleSort(copy);
    setMoves(moves);
    setSortedArr([...sortedArray]);

    setTimeout(() => {
      animateBubbleSort(array, moves, setSortedArr);
    }, 0);

    setTimeout(() => {
      setSortedArr(sortedArray);
    }, moves.length * 50);
  }

  function handleResetClick() {
    reset();
  }

  function reset() {
    setArrayLength(10);
    setArray([]);
    setSorted(false);
    setSortedArr([]);
    setButtonClicked(false);
    generateArray(10);
  }

  return (
    <>
      <h1>Sorting Algorithm Visualization</h1>
      <div>
        <h2>Slider</h2>
        <input
          type="range"
          min="10"
          max="300"
          value={arrayLength}
          onChange={handleSliderChange}
          disabled={buttonClicked}
        />
      </div>

      <BarsContainer array={array} />

      <div>
        <button onClick={handleBubbleSortClick} disabled={buttonClicked}>
          Bubble Sort
        </button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
}

export default App;
