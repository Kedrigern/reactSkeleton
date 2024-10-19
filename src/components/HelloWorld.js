import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function HelloWorld({ greatings, who }) {
  return (
    <Box>
      <Heading as="h2">Hello world!</Heading>
      <Heading as="h4" size="sm">
        {greatings}, {who}!
      </Heading>
    </Box>
  );
}

export default HelloWorld;
