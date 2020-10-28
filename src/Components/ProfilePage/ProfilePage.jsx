import {
  Avatar,
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Button,
  Heading,
} from "@chakra-ui/core";
import React, { Component } from "react";
import EditableBio from "./EditableBio";
import BookingHistory from "./BookingHistory";
import YourListings from "./YourListings";

class ProfilePage extends Component {
  render() {
    return (
      <Box px="120px" py={10}>
        <Text>Profile</Text>
        <Flex w="100%">
          <EditableBio />
          <Avatar
            h={200}
            w={200}
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            mx="auto"
          />
        </Flex>
        <Accordion allowToggle py={5}>
          <AccordionItem borderTop="none" defaultIsOpen={false}>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Heading>Booking history</Heading>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <BookingHistory />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Heading>Your Listings</Heading>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <YourListings />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    );
  }
}

export default ProfilePage;
