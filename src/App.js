import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent'
import './App.css';



function App() {
  const [time, setTime] = useState({s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  

  const start = () => {
    setStatus(1)
    run();
    setInterv(setInterval(run, 1000));
  };


  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH })
  }


  const stop = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0, h: 0 });
    if (updatedH > 0) {
      updatedH = -1
    } else if (updatedM > 0) {
      updatedM = -1;
    } else if (updatedS > 0) {
      updatedS = -1
    }
    start();
  };

  const wait = () => {
    clearInterval(interv);
    setStatus(2)
  };
  
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent status={status} wait={wait} reset={reset} stop={stop} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
