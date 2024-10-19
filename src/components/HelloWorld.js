import React from "react";

function HelloWorld({ greatings, who }) {
  return (
    <>
      <h2>Hello world!</h2>
      <p>
        {greatings}, {who}!
      </p>
    </>
  );
}

export default HelloWorld;
