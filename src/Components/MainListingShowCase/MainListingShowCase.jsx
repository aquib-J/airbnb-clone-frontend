import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";
import BookingCard from "./BookingCard";
import Description from "./Description";
import ImagePanel from "./ImagePanel";
import Reviews from "./Reviews";

class MainListingShowCase extends Component {
  render() {
    return (
      <Box px="80px">
        <Box my={5}>
          <Heading fontFamily="montserrat">Studio apartments</Heading>
          <Flex alignItems="center" my={4} fontWeight={600}>
            <Box
              as={AiOutlineStar}
              size="18px"
              display="inline"
              color="pink.300"
            />
            5.0
            <Text fontFamily="montserrat" pl={4}>
              Gurugram, Haryana, India
            </Text>
          </Flex>
        </Box>
        <ImagePanel />
        <Flex my={10}>
          <Description />
          <BookingCard />
        </Flex>
        <Divider />
        <Reviews />
      </Box>
    );
  }
}

export default MainListingShowCase;
