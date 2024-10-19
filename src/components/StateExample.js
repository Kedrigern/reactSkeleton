import React, { useState } from "react";

function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Component states</h2>
      <table>
        <tr>
          <td>Number of clicks:</td>
          <td>{count}</td>
          <td>
            <button onClick={() => setCount(count + 1)}>Click!</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default StateExample;
