import calculateDelay from '../Helpers/calculateDelay';

function animateSort(
  array,
  moves,
  setSortedArray,
  setMove,
  setTimeoutId,
  arrayLength
) {
  if (!moves || moves.length === 0) {
    setMove({});
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indicies;

  if (move.type === 'swap' || move.type === 'pivot') {
    [array[i], array[j]] = [array[j], array[i]];
  } else if (move.type === 'merge') {
    array[i] = move.value;
  }

  setMove(move);
  setSortedArray([...array]);

  const delay = calculateDelay(arrayLength);
  const id = setTimeout(() => {
    animateSort(
      array,
      moves,
      setSortedArray,
      setMove,
      setTimeoutId,
      arrayLength
    );
  }, delay);
  setTimeoutId(id);
}

export default animateSort;
