import React from "react";

function ListExample() {
  const fruits = ["apple", "banana", "orange", "cereal"];
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>
      <h2>Work with list and arrays</h2>
      <div className="flex-container">
        <div>
          <ul>
            {fruits.map((fruit, key) => (
              <li key={key}>{fruit.toUpperCase()}</li>
            ))}
          </ul>
        </div>

        <div>
          <table>
            <thead />
            <tbody>
              {matrix.map((row, rowInd) => (
                <tr key={rowInd}>
                  {row.map((cell, colInd) => (
                    <td key={rowInd + colInd} row={rowInd} col={colInd}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot />
          </table>
        </div>
      </div>
    </>
  );
}

export default ListExample;
