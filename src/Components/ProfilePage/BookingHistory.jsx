import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import React, { Component } from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/core";
import { GrLocation } from "react-icons/gr";

class BookingHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: this.props.bookings,
    };
  }

  render() {
    return (
      <Box pb={5}>
        <Flex flexWrap="wrap">
          {this.state.bookings.map((booking) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              flex="0 0 28.333333%"
              mx={6}
              mt={6}
            >
              <Image
                src={booking.listing.listingImage.url}
                alt="Listing Image"
              />

              <Box p="6">
                <Box d="flex" alignItems="baseline" my={1}>
                  <Badge
                    rounded="full"
                    px="2"
                    variantColor="teal"
                    color="black"
                  >
                    {booking.checkinDate}
                  </Badge>
                  -
                  <Badge
                    rounded="full"
                    px="2"
                    variantColor="teal"
                    color="black"
                  >
                    {booking.checkoutDate}
                  </Badge>
                </Box>

                <Box my={2} fontWeight="semibold" as="h4" lineHeight="tight">
                  A {booking.listing.features.typeofListing} hosted by{" "}
                  {booking.listing.hostDetail.firstName}
                </Box>

                <Box my={2}>
                  <Box
                    as={GrLocation}
                    size="26px"
                    display="inline"
                    color="#f24b5b"
                  />
                  {booking.listing.cityData.city}
                  {", "}
                  {booking.listing.cityData.country}
                </Box>

                <Box my={2} fontWeight={600}>
                  &#x20B9;{booking.totalCost}
                  <Box as="span" color="gray.600" fontSize="sm">
                    /-
                  </Box>
                </Box>

                <Box
                  as="span"
                  d="flex"
                  alignItems="center"
                  my={2}
                  color="gray.600"
                >
                  <Box
                    as={AiFillStar}
                    size="24px"
                    display="inline"
                    color="#f24b5b"
                  />
                  <Text fontFamily="montserrat" fontSize="16px" ml={1}>
                    5
                  </Text>
                </Box>

                <Box d="flex" mt={2} alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {booking.reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    );
  }
}

export default BookingHistory;
