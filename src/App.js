import React from "react";
import HelloWorld from "./components/HelloWorld";
import ListExample from "./components/ListExample";
import StateExample from "./components/StateExample";

function App() {
  return (
    <div>
      <h1>React skeleton</h1>
      <HelloWorld greatings="Ahoj" who="světe širý" />
      <ListExample />
      <StateExample />
      <hr />
      <p>Keddie</p>
    </div>
  );
}

export default App;
