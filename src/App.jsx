import React from 'react';
import { useState, useEffect } from 'react';
import bubbleSort from './Algorithms/BubbleSort';
// import BarsContainer from './Components/BarsContainer';

function App() {
  const [arrayLength, setArrayLength] = useState(10);
  const [array, setArray] = useState([]);

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
    console.log(array);
    const sorted = bubbleSort(array);
    console.log(sorted);
    setArray(sorted);
  }

  return (
    <>
      <h1>Sorting Algorithm Visualization</h1>
      <div>
        <h2>Slider</h2>
        <input type="range" min="10" max="500" value={arrayLength} onChange={handleSliderChange} />
      </div>

      {/* <BarsContainer arrayLength={arrayLength} /> */}

      <div>
        <button onClick={handleBubbleSortClick}>Bubble Sort</button>
      </div>
    </>
  );
}

export default App;
