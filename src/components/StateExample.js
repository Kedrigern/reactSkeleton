import React, { useState } from "react";
import { Heading, Button, Text } from "@chakra-ui/react";
import { QuestionIcon, WarningTwoIcon } from "@chakra-ui/icons";
function StateExample() {
  // My custom states
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(true);

  return (
    <>
      <Heading as="h2">States</Heading>
      <Button onClick={() => setIcon(!icon)}>
        {icon ? <QuestionIcon /> : <WarningTwoIcon />}
      </Button>
      <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      <Text>Number of clicks: {count}</Text>
    </>
  );
}

export default StateExample;
