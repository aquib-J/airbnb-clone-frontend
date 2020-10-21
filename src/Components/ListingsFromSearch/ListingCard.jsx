import { Box, Divider, Flex, IconButton, Image, Text } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

class ListingCard extends Component {
  render() {
    const {
      subtitle,
      title,
      url,
      bookmark,
      amenities,
      rating,
      price,
    } = this.props;
    return (
      <Box
        w="100%"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        my={5}
        display={{ md: "flex" }}
      >
        <Image src={url} alt="Woman paying for a purchase" />

        <Box py="4" px="6" flex="1">
          <Flex w="100%" justify="space-between" alignItems="baseline">
            <Text as="i" fontSize="12px" fontWeight={500}>
              {subtitle}
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
            {title}
          </Box>
          <Divider w={20} />
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {amenities}
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
                as={AiOutlineStar}
                size="32px"
                display="inline"
                color="yellow.300"
              />
              {rating}
            </Box>
            <Box fontWeight={700} fontSize="lg">
              &#x20B9;{price}
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
