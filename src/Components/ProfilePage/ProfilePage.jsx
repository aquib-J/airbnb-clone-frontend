import { Avatar, Box, Flex, Text } from "@chakra-ui/core";
import React, { Component } from "react";
import EditableBio from "./EditableBio";

class ProfilePage extends Component {
  render() {
    return (
      <Box px="120px" py={10}>
        <Text>Profile</Text>
        <Flex w="100%">
          <EditableBio />
          {/* <Flex justify="center" w="25%"> */}
          <Avatar
            h={200}
            w={200}
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            mx="auto"
          />
          {/* </Flex> */}
        </Flex>
      </Box>
    );
  }
}

export default ProfilePage;
