import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Main />

      <hr />
      <p>Keddie</p>
    </ChakraProvider>
  );
}

export default App;
