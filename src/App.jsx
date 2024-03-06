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
    setSorted(true);

    const { sortedArray, moves } = bubbleSort(array);
    animateBubbleSort(moves);
    setSortedArr(sortedArray);

    setSorted(false);
  }

  function handleResetClick() {
    reset();
  }

  function reset() {
    setArrayLength(10);
    setArray([]);
    setSorted(false);
    setSortedArr([]);
    generateArray(10);
  }

  return (
    <>
      <h1>Sorting Algorithm Visualization</h1>
      <div>
        <h2>Slider</h2>
        <input type="range" min="10" max="300" value={arrayLength} onChange={handleSliderChange} />
      </div>

      <BarsContainer array={sorted ? sortedArr : array} />

      <div>
        <button onClick={handleBubbleSortClick}>Bubble Sort</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
}

export default App;
