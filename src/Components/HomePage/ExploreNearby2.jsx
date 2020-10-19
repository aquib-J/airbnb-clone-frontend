import React, { Component } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/core";

class ExploreNearby2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          url:
            "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320",
          title: "Unique Stays",
          description: "Spaces that are more than just a place to stay",
        },
        {
          url:
            "https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=320",
          title: "Online Experiences",
          description:
            "Unique activities we can do together, led by a world of hosts",
        },
        {
          url:
            "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320",
          title: "Entire Homes",
          description:
            "Comfortable private places, with room for friends or family",
        },
        {
          url:
            "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320",
          title: "Entire Homes",
          description:
            "Comfortable private places, with room for friends or family",
        },
        {
          url:
            "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320",
          title: "Entire Homes",
          description:
            "Comfortable private places, with room for friends or family",
        },
        {
          url:
            "https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=320",
          title: "Online Experiences",
          description:
            "Unique activities we can do together, led by a world of hosts",
        },
      ],
    };
  }

  render() {
    return (
      <Flex px="80px" py={20} flexWrap="wrap" justify="space-between">
        {this.state.cards.map((card) => (
          <Box
            maxW="23rem"
            my={5}
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.18)"
          >
            <Image src={card.url} w="100%" h={230} />
            <Box px={5} py={2}>
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                {card.title}
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Text color="#717171">{card.description}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    );
  }
}

export default ExploreNearby2;
