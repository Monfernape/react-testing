/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";

export const Counter = ({ title }) => {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount(e.target.valueAsNumber);
  };

  return (
    <div>
      <h1 data-testid="testing">{title}</h1>
      <div>
        {" "}
        {/* <h1>{count}</h1> */}
        <input
          style={{ padding: "10px", marginBottom: "20px" }}
          role={"alert"}
          type="number"
          min={1}
          max={100}
          value={count}
          width="80px"
          onChange={handleClick}
        />
      </div>
      <button role={"button"} onClick={() => setCount(count + 1)}>
        Increment by one
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement by one</button>
    </div>
  );
};
