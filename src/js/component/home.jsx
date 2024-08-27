import React, { useState } from 'react';


const App = () => {
  const [color, setColor] = useState('null');

  return (
    <div className="wrapper">
      <div className="traffic-top"></div>
      <div className="traffic-light">
        <div
          className={`light red ${color === 'red' ? 'glow-red' : ''}`}
          onClick={() => setColor('red')}
        ></div>
        <div
          className={`light yellow ${color === 'yellow' ? 'glow-yellow' : ''}`}
          onClick={() => setColor('yellow')}
        ></div>
        <div
          className={`light green ${color === 'green' ? 'glow-green' : ''}`}
          onClick={() => setColor('green')}
        ></div>
      </div>
      <div className="buttonGroup">
      <div>
        <button className="button" type="button" onClick={() => setColor('null')}>Turn off all lights</button>
      </div>
      </div>
    </div>
  ) 
};

export default App;
