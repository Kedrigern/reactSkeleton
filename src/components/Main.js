import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import HelloWorld from "./HelloWorld";
import ListExample from "./ListExample";
import StateExample from "./StateExample";

function Main() {
  return (
    <Flex>
      <Box p="4" alignContent="center">
        <p>Examples of some React.js custom components and Chakra UI</p>
      </Box>
      <Box p="4">
        <HelloWorld greatings="Ahoj" who="světe širý" />
      </Box>
      <Box p="4">
        <ListExample />
      </Box>
      <Box p="4">
        <StateExample />
      </Box>
    </Flex>
  );
}

export default Main;
