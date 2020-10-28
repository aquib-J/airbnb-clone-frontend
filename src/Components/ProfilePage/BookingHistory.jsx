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
  render() {
    const property = [
      {
        imageUrl:
          "https://www.intechnic.com/hubfs/Imported_Blog_Media/Best-Hotel-Website-Designs-SMALL-3.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://www.intechnic.com/hubfs/Imported_Blog_Media/Best-Hotel-Website-Designs-SMALL-3.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "In the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://www.intechnic.com/hubfs/Imported_Blog_Media/Best-Hotel-Website-Designs-SMALL-3.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://www.intechnic.com/hubfs/Imported_Blog_Media/Best-Hotel-Website-Designs-SMALL-3.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://www.intechnic.com/hubfs/Imported_Blog_Media/Best-Hotel-Website-Designs-SMALL-3.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
    ];
    return (
      <Box pb={5}>
        <Flex flexWrap="wrap">
          {property.map((property) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              flex="0 0 28.333333%"
              mx={6}
              mt={6}
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />

              <Box p="4">
                <Box d="flex" alignItems="baseline">
                  <Badge rounded="full" px="2" variantColor="teal">
                    New
                  </Badge>
                  <Badge rounded="full" px="2" variantColor="teal">
                    New
                  </Badge>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {property.title}
                </Box>

                <Box>
                  &#x20B9;{property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box as="span" d="flex" alignItems="center" color="gray.600">
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

                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount} reviews
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
