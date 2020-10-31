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

class BookingHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: this.props.listings,
    };
  }

  render() {
    return (
      <Box pb={5}>
        <Flex flexWrap="wrap">
          {this.state.listings.length == 0 ? (
            <Box>You have no listings yet !!</Box>
          ) : (
            this.state.listings.map((listing) => (
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
                  src={listing.listingImage.url}
                  alt="No Preview available"
                  h="240px"
                  w="100%"
                />

                <Box p="6" my={2}>
                  <Box d="flex" alignItems="baseline">
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      {listing.features.beds} beds &bull;{" "}
                      {listing.features.bathrooms} baths
                    </Box>
                  </Box>

                  <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    my={2}
                    isTruncated
                  >
                    {listing.listingDescription}
                  </Box>

                  <Box my={2}>
                    &#x20B9;{listing.pricePerDay}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / night
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
                      {listing.avgRating}
                    </Text>
                  </Box>

                  <Box d="flex" mt={2} alignItems="baseline">
                    <Box as="span" color="gray.600" fontSize="sm">
                      Added On{" "}
                      <Badge
                        rounded="full"
                        px="2"
                        variantColor="teal"
                        color="black"
                      >
                        {listing.createdAt.split("T11")[0]}
                      </Badge>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Flex>
      </Box>
    );
  }
}

export default BookingHistory;
