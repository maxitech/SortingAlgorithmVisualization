function BarsContainer({ array, move }) {
  const moveExist = Object.keys(move).length === 0;
  const barHeight = array.map((bar) => bar * 100);
  const barEl = array.map((bar, i) => {
    let barColor = '#525ceb';
    if (move && !moveExist && move.indicies?.includes(i)) {
      if (move.type === 'swap') {
        barColor = '#DA1212';
      } else if (move.type === 'comp') {
        barColor = '#F0DE36';
      } else if (move.type === 'merge') {
        barColor = '#00FF00';
      }
    }

    return (
      <div
        key={i}
        className='bar'
        style={{ height: `${barHeight[i]}%`, backgroundColor: `${barColor}` }}
      ></div>
    );
  });

  return <div className='bars_container'>{barEl}</div>;
}

export default BarsContainer;
