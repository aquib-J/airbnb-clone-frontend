import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/core";
import React, { Component } from "react";

class ImagePanel extends Component {
  render() {
    return (
      <SimpleGrid w="100%" minChildWidth="50%" rounded="lg" overflow="hidden">
        <Box mr={2}>
          <Image
            src="https://pbs.twimg.com/media/EkZHk2bWsAAVSdN.jpg"
            alt="Dan Abramov"
            minWidth="100%"
            minHeight="100%"
          />
        </Box>
        <SimpleGrid minChildWidth="50%">
          <Box mr={2} mb={2}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsyx46hfcp32k2crZQgquFX-P_Zt5prDU13g&usqp=CAU"
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box mb={2}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7dx2NxVAP6WnpUAR6tvrrLp-TGSsdNueLbg&usqp=CAU"
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box mr={2}>
            <Image
              src="https://format-com-cld-res.cloudinary.com/image/private/s--reklwBew--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/5acced2580f73f6fd2a795fac1139efd/443266045_LR_0281_sofa_Edit4_sign_nocord.jpg"
              alt="Dan Abramov"
              minWidth="100%"
              minHeight="100%"
            />
          </Box>
          <Box>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_D1gwuWfW24Ih5cCu286MDXlLOhGvgCX0g&usqp=CAU"
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
