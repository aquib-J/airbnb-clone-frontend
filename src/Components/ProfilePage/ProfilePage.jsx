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
  Input,
  FormControl,
  Skeleton,
  Stack,
} from "@chakra-ui/core";
import React, { Component } from "react";
import EditableBio from "./EditableBio";
import BookingHistory from "./BookingHistory";
import YourListings from "./YourListings";
import { getUser } from "../Api";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    let user = await getUser();
    this.setState({ user, isLoading: false });
    console.log(user);
  }

  render() {
    return (
      <Box px="120px" py={10}>
        <Flex w="100%">
          {this.state.isLoading ? (
            <Stack w="70%">
              <Skeleton height="20px" my="10px" w="100%" />
              <Skeleton height="20px" my="10px" w="100%" />
              <Skeleton height="20px" my="10px" w="100%" />
            </Stack>
          ) : (
            <EditableBio {...this.state.user} />
          )}

          <Flex flexDirection="column" align="center" ml="auto">
            <Skeleton isLoaded={!this.state.isLoading}>
              <Avatar
                h={200}
                w={200}
                name="Segun Adebayo"
                src={this.state.user.profilePictureUrl}
                mb={5}
              />
            </Skeleton>
            <Skeleton mt={5} isLoaded={!this.state.isLoading}>
              <FormControl>
                <Input type="file" size="sm"></Input>
              </FormControl>
            </Skeleton>
          </Flex>
        </Flex>
        <Accordion allowToggle allowMultiple py={5}>
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
                  {this.state.isLoading ? (
                    <Stack isInline spacing={10}>
                      <Skeleton height="300px" my="10px" w="200px" />
                      <Skeleton height="300px" my="10px" w="200px" />
                      <Skeleton height="300px" my="10px" w="200px" />
                    </Stack>
                  ) : (
                    <BookingHistory
                      bookings={[...this.state.user.bookingHistory]}
                    />
                  )}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Heading>Your listings</Heading>
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
                  <AccordionPanel mb={4}>
                    {this.state.isLoading ? (
                      <Stack isInline spacing={10}>
                        <Skeleton height="300px" my="10px" w="300px" />
                        <Skeleton height="300px" my="10px" w="300px" />
                        <Skeleton height="300px" my="10px" w="300px" />
                      </Stack>
                    ) : (
                      <YourListings
                        listings={[...this.state.user.hostListing].slice(0, 4)}
                      />
                    )}
                  </AccordionPanel>
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
