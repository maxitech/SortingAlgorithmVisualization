import React from 'react';
import { useState, useEffect } from 'react';
import bubbleSort from './Algorithms/bubbleSort';
import mergeSort from './Algorithms/mergeSort';
import BarsContainer from './Components/BarsContainer';
import animateSort from './Animations/animation';

function App() {
  const [arrayLength, setArrayLength] = useState(50);
  const [array, setArray] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [move, setMove] = useState({});
  const [timeoutId, setTimeoutId] = useState(null);
  const [selectedValue, setSelectedValue] = useState('bubble');

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

  function startAnimation(moves) {
    animateSort(array, moves, setSortedArr, setMove, setTimeoutId, arrayLength);
  }

  function startSort(sortAlgorithm) {
    const copy = [...array];
    const { sortedArray, moves } = sortAlgorithm(copy);

    setButtonClicked(true);
    setSortedArr([...sortedArray]);
    startAnimation(moves);
  }

  function handleSortClick() {
    if (selectedValue === 'bubble') startSort(bubbleSort);
    if (selectedValue === 'merge') startSort(mergeSort);
  }

  function handleSelectChange(e) {
    setSelectedValue(e.target.value);
  }

  function handleSliderChange(e) {
    const sliderValue = parseInt(e.target.value);
    generateArray(sliderValue);
    setArrayLength(sliderValue);
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
      <div className='select_container'>
        <label htmlFor='select_box' className='select_label'>
          Choose Algorithm:
        </label>
        <select
          id='select_box'
          value={selectedValue}
          onChange={handleSelectChange}
          className='select_box'
        >
          <option value='bubble'>Bubble Sort</option>
          <option value='merge'>Merge Sort</option>
        </select>
      </div>

      <div className='use_info_container'>
        <div className='slider_container'>
          <h2>Change Array Size & Speed:</h2>
          <input
            type='range'
            min='10'
            max='100'
            value={arrayLength}
            onChange={handleSliderChange}
            disabled={buttonClicked}
          />
        </div>
        <div className='info_container'>
          <div className='info'>
            <div className='info_color red'></div>
            <p>swap</p>
          </div>

          <div className='info'>
            <div className='info_color yellow'></div>
            <p>compare</p>
          </div>

          {selectedValue === 'merge' && (
            <div className='info'>
              <div className='info_color green'></div>
              <p>merge</p>
            </div>
          )}
        </div>
      </div>

      <BarsContainer array={array} move={move} />

      <div className='btn_container'>
        <button
          onClick={handleSortClick}
          disabled={buttonClicked}
          className='btn'
        >
          Sort
        </button>

        <button onClick={handleResetClick} className='btn'>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
