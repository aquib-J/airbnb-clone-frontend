import { Avatar, Box, Flex, SimpleGrid } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";

class Reviews extends Component {
  render() {
    return (
      <Box mb={10}>
        <Flex fontSize={32} alignItems="center" my={4} fontWeight={600}>
          <Box
            as={AiOutlineStar}
            size="36px"
            display="inline"
            color="pink.300"
          />
          5.0
        </Flex>
        <SimpleGrid columns={2} spacing={10}>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Great property with an amazing host. Sameer will ensure that you
              have everything sorted out before you even check in.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/kent-c-dodds"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/ryan-florence"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/code-beast"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/broken-link"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/dan-abramov"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
          <Box height="fit-content">
            <Flex align="center">
              <Avatar
                size="md"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/tioluwani-kolawole"
              />
              <Box ml={4}>
                <Box fontWeight={600}>Tushar</Box>
                <Box fontSize="12px">October 2020</Box>
              </Box>
            </Flex>
            <Box fontSize={14} mt={4}>
              Really good hospitality. The apartment is just apt. and really
              clean with a good view. Sameer is always available for help.
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    );
  }
}

export default Reviews;
