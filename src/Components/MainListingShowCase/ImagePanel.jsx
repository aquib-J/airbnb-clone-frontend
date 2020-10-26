import { Box, Image, SimpleGrid } from "@chakra-ui/core";
import React, { Component } from "react";

class ImagePanel extends Component {
  render() {
    return (
      <SimpleGrid w="100%" minChildWidth="50%" rounded="lg" overflow="hidden">
        <Box mr={2}>
          <Image
            src={this.props.url[0].url}
            alt="Dan Abramov"
            minWidth="100%"
            minHeight="100%"
          />
        </Box>
        <SimpleGrid minChildWidth="50%">
          <Box mr={2} mb={2}>
            <Image
              src={this.props.url[1].url}
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box mb={2}>
            <Image
              src={this.props.url[2].url}
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box mr={2}>
            <Image
              src={this.props.url[3].url}
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box>
            <Image
              src={this.props.url[4].url}
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    );
  }
}

export default ImagePanel;
