function BarsContainer({ array, move }) {
  const moveExist = Object.keys(move).length === 0;
  const barHeight = array.map((bar) => bar * 100);
  const barEl = array.map((bar, i) => {
    let barColor = '#525ceb';
    if (move && !moveExist && move.indicies?.includes(i)) {
      barColor = move.type === 'swap' ? '#DA1212' : '#F0DE36';
    }
    return (
      <div
        key={i}
        className="bar"
        style={{ height: `${barHeight[i]}%`, backgroundColor: `${barColor}` }}
      ></div>
    );
  });

  return <div className="bars_container">{barEl}</div>;
}

export default BarsContainer;
