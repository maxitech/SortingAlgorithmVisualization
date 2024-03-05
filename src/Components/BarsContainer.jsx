import React, { useEffect } from 'react';

function BarsContainer({ array, sortedArr }) {
  const barHeight = array.map((bar) => bar * 100);
  const barEl = array.map((bar, i) => {
    return <div key={i} className="bar" style={{ height: `${barHeight[i]}%` }}></div>;
  });

  return <div className="bars_container">{barEl}</div>;
}

export default BarsContainer;
