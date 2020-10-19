import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <Flex
        backgroundImage="url('https://static.yancey.app/18084f37-67e0-400f-bfd8-55eea0e89508.jpg')"
        backgroundPosition="center"
        h="80vh"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        px="80px"
        alignItems="center"
      >
        <Box color="white" w="30%">
          <Heading>Go Near</Heading>
          <Text mb={2} fontWeight={500}>
            Settle in somewhere new. Discover nearby stays to live, work, or
            just relax
          </Text>
          <Button
            color="#222a30"
            fontSize="14px"
            variant="solid"
            bg="white"
            rounded="lg"
          >
            Explore Nearby
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default Hero;
