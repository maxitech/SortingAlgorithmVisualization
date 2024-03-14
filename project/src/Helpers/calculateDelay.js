function calculateDelay(arrayLength) {
  const maxArrayLength = 70;
  const minArrayLength = 10;
  const maxDelay = 250;
  const minDelay = 0;
  const defaultDelay = 20;

  if (arrayLength <= minArrayLength) {
    return maxDelay;
  } else if (arrayLength >= maxArrayLength) {
    return minDelay;
  } else if (arrayLength === (minArrayLength + maxArrayLength) / 2) {
    return defaultDelay;
  } else {
    const slope = (minDelay - maxDelay) / (maxArrayLength - minArrayLength);
    return slope * (arrayLength - minArrayLength) + maxDelay;
  }
}

export default calculateDelay;
