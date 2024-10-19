import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} px={4} width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Text color={color} fontWeight="bold">
            React skeleton
          </Text>
          <Link href="/" color={color} fontWeight="bold">
            Home
          </Link>
          <Link href="/#about" color={color} fontWeight="bold">
            About
          </Link>
        </HStack>
        <Spacer />
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
