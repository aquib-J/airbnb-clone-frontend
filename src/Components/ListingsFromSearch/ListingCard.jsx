import { Box, Divider, Flex, IconButton, Image, Text } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

class ListingCard extends Component {
  render() {
    const {
      id,
      listingDescription,
      images,
      bookmark,
      avgRating,
      pricePerDay,
      features,
    } = this.props;
    console.log(images);
    return (
      <Box
        w="100%"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        my={5}
        display={{ md: "flex" }}
      >
        <Box w={{ lg: "22%", md: "100%" }}>
          <Image
            w="100%"
            h="200px"
            src={
              images.length
                ? images[0].url
                : "https://test.crowdwisdom.co.in/images/common/no-image.png"
            }
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box py="4" px="6" flex="1">
          <Flex w="100%" justify="space-between" alignItems="baseline">
            <Text as="i" fontSize="12px" fontWeight={500}>
              {features.typeofListing}
            </Text>
            <IconButton
              aria-label="Search database"
              icon={AiOutlineHeart}
              bg="none"
            />
          </Flex>

          <Box
            mt="1"
            fontWeight={600}
            as="h1"
            fontSize="18px"
            lineHeight="tight"
            isTruncated
          >
            {listingDescription}
          </Box>
          <Divider w={20} />
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {Object.keys(features).reduce((acc, feature) => {
                if (Number.isFinite(features[feature])) {
                  if (feature == "maxOccupants")
                    acc = acc + `${features[feature]} guests · `;
                  else acc = acc + `${features[feature]} ${feature} · `;
                }
                return acc;
              }, "")}
            </Box>
          </Box>

          <Box
            d="flex"
            mt="2"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box as="span" d="flex" alignItems="center" color="gray.600">
              <Box
                as={AiFillStar}
                size="24px"
                display="inline"
                color="#f24b5b"
              />
              <Text fontFamily="montserrat" fontSize="16px" ml={1}>
                {avgRating}
              </Text>
            </Box>
            <Box fontWeight={700} fontSize="lg">
              &#x20B9;{pricePerDay}
              <Box as="span" fontSize="sm">
                /night
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ListingCard;
