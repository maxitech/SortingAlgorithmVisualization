function calculateDelay(arrayLength) {
  const maxArrayLength = 50;
  const minArrayLength = 10;
  const maxDelay = 500;
  const minDelay = 0;

  if (arrayLength <= minArrayLength) {
    return maxDelay;
  } else if (arrayLength >= maxArrayLength) {
    return minDelay;
  } else {
    const slope = (minDelay - maxDelay) / (maxArrayLength - minArrayLength);
    return slope * (arrayLength - minArrayLength) + maxDelay;
  }
}

export default calculateDelay;
