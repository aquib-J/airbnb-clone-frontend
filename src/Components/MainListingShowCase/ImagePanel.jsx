import { Box, Image, SimpleGrid } from "@chakra-ui/core";
import React, { Component } from "react";

class ImagePanel extends Component {
  render() {
    return (
      <SimpleGrid w="100%" minChildWidth="50%" rounded="lg" overflow="hidden">
        <Box mr={2}>
          <Image
            src={
              this.props.url[0]
                ? this.props.url[0].url
                : "https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-thane-hotel-th.jpg"
            }
            alt="Dan Abramov"
            w="100%"
            h="468px"
          />
        </Box>
        <SimpleGrid minChildWidth="50%">
          <Box mr={2} mb={2}>
            <Image
              src={
                this.props.url[1]
                  ? this.props.url[1].url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJqGhZNdfVkVcBUXzMf0RYLRVbCPzY5x9OYw&usqp=CAU"
              }
              alt="Dan Abramov"
              w="100%"
              h="230px"
            />
          </Box>
          <Box mb={2}>
            <Image
              src={
                this.props.url[2]
                  ? this.props.url[2].url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTid-W_Us-CPVs8G54plpO2py_yn55FLEK-lg&usqp=CAU"
              }
              alt="Dan Abramov"
              w="100%"
              h="230px"
            />
          </Box>
          <Box mr={2}>
            <Image
              src={
                this.props.url[3]
                  ? this.props.url[3].url
                  : "https://www.gingerhotels.com/resourcefiles/hotelprofile/ginger-thane-hotel-th.jpg"
              }
              alt="Dan Abramov"
              w="100%"
              h="230px"
            />
          </Box>
          <Box>
            <Image
              src={
                this.props.url[4]
                  ? this.props.url[4].url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREKh1dg82cxs6c_zev7y_MkgdljVuH_dQo9A&usqp=CAU"
              }
              alt="Dan Abramov"
              w="100%"
              h="230px"
            />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    );
  }
}

export default ImagePanel;
