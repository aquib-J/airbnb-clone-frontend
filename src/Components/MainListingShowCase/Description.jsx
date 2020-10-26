import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { BsHouse } from "react-icons/bs";
import { FaBan, FaBed, FaRegThumbsUp } from "react-icons/fa";

export class Description extends Component {
  render() {
    const features = this.props.features;
    return (
      <Box w="60%" fontFamily="montserrat">
        <Box mb={5}>
          <Heading fontSize="24px">{this.props.desc}</Heading>
          <Text as="i" fontSize="12px" fontWeight={500}>
            {Object.keys(features).reduce((acc, feature) => {
              if (Number.isFinite(features[feature])) {
                if (feature == "maxOccupants")
                  acc = acc + `${features[feature]} guests · `;
                else acc = acc + `${features[feature]} ${feature} · `;
              }
              return acc;
            }, "")}
          </Text>
        </Box>
        <Divider />
        <Box my={5}>
          <Text fontWeight={600} fontSize={24} fontFamily="montserrat">
            Policies
          </Text>
          <Stack spacing={4} py={2} fontSize={14}>
            <Flex align="center">
              <Box d="inline" as={BsHouse} size="20px" />
              <Box px={5}>
                <Box fontWeight="600">Entire Home</Box>
                <Box>You’ll have the guest suite to yourself.</Box>
              </Box>
            </Flex>
            <Flex align="center">
              <Box d="inline" as={FaRegThumbsUp} size="20px" />
              <Box px={5}>
                <Box fontWeight="600">Enhanced Clean</Box>
                <Box>
                  This host committed to Airbnb's 5-step enhanced cleaning
                  process
                </Box>
              </Box>
            </Flex>
            <Flex align="center">
              <Box d="inline" as={FaBan} size="20px" />
              <Box px={5}>
                <Box fontWeight="600">Free cancellation</Box>
                <Box>
                  After that get a full refund, minus the first night and
                  service fee.
                </Box>
              </Box>
            </Flex>
            <Flex align="center">
              <Box d="inline" as={AiOutlineSolution} size="20px" />
              <Box px={5}>
                <Box fontWeight="600">This host doesn’t allow pets</Box>
                <Box>
                  Make sure this host's house rules work for you before you
                  book.
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Box>
        <Divider />
        <Box py={4} fontSize="14px">
          {this.props.desc}
        </Box>
        <Divider />
        <Box my={4}>
          <Box fontWeight={600} fontSize={24}>
            Sleeping arrangements
          </Box>
          <Stack
            border="1px"
            p={4}
            borderColor="#dddddd"
            w="30%"
            mt={3}
            rounded="lg"
          >
            <Box as={FaBed} size="32px" />
            <Box>Bedroom {features.bedrooms}</Box>
            <Box fontSize={14}>{features.beds} Double bed</Box>
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default Description;
