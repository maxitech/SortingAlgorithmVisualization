import React from 'react';
import { useState, useEffect } from 'react';
import bubbleSort from './Algorithms/BubbleSort';
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
    const sorted = bubbleSort(array);
    setSortedArr(sorted);
    setSorted(!sorted);
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
      </div>
    </>
  );
}

export default App;
