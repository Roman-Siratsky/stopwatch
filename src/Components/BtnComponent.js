import React from 'react';


function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ? 
        <div>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.start}>Start</button>
        </div> : ""
      }

      {(props.status === 1) ? 
        <div>
            <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.wait}>Wait</button>
        </div> : ""
      }

      {(props.status === 2) ? 
        <div>
            <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.start}>Start</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.wait}>Wait</button>
        </div> : ""
      }

    </div>
  );
}

export default BtnComponent;
