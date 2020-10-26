import { Avatar, Box, Flex, SimpleGrid } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";

class Reviews extends Component {
  render() {
    const reviews = this.props.review;
    return (
      <Box mb={10}>
        <Flex fontSize={32} alignItems="center" my={4} fontWeight={600}>
          <Box
            as={AiOutlineStar}
            size="36px"
            display="inline"
            color="pink.300"
          />
          {this.props.rating}
        </Flex>
        <SimpleGrid columns={2} spacing={10}>
          {reviews.length ? (
            reviews.map((review) => (
              <Box key={review.id} height="fit-content">
                <Flex align="center">
                  <Avatar
                    size="md"
                    name="Prosper Otemuyiwa"
                    src={review.reviewerInfo.pic}
                  />
                  <Box ml={4}>
                    <Box fontWeight={600}>{review.reviewerInfo.firstName}</Box>
                    <Box fontSize="12px">{review.createdAt}</Box>
                  </Box>
                </Flex>
                <Box fontSize={14} mt={4}>
                  {review.description}
                </Box>
              </Box>
            ))
          ) : (
            <Box>No Reviews Yet</Box>
          )}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Reviews;
