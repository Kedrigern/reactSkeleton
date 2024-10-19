import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  Spacer,
  UnorderedList,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";

function ListExample() {
  const fruits = ["APPLE", "BANANA", "ORANGE"];
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>
      <Heading as="h2">Lists and arrays</Heading>
      <Flex>
        <Box>
          <UnorderedList>
            {fruits.map((fruit, key) => (
              <Tooltip key={key} label={fruit}>
                <ListItem key={key}>{fruit.toLowerCase()}</ListItem>
              </Tooltip>
            ))}
          </UnorderedList>
        </Box>
        <Spacer />
        <Box>
          <SimpleGrid columns={3} spacing={1}>
            {matrix.map((row, rowInd) =>
              row.map((cell, colInd) => (
                <Box
                  key={rowInd + "," + colInd}
                  bg="green.50"
                  width="30px"
                  height="30px"
                  textAlign="center"
                  verticalAlign="center"
                  onClick={(e) => console.log(cell.toString())}
                >
                  <Tooltip label={cell}>
                    <Text fontWeight="bold" textColor="black">
                      {cell}
                    </Text>
                  </Tooltip>
                </Box>
              )),
            )}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}

export default ListExample;
