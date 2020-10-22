import {
  Box,
  Divider,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <Box px="80px" bg="#f7f7f7" pt={10} fontFamily="montserrat">
        <SimpleGrid minChildWidth="120px" spacing="40px" pb={5} fontSize={14}>
          <Stack>
            <Text fontWeight={700}>About</Text>
            <Link>How Airbnb Works</Link>
            <Link>Newsroom</Link>
            <Link>Airbnb Plus</Link>
            <Link>Airbnb Luxe</Link>
            <Link>HotelTonight</Link>
            <Link>Airbnb for Work</Link>
            <Link>Olympics</Link>
            <Link>Careers</Link>
          </Stack>
          <Stack>
            <Text fontWeight={700}>Community</Text>
            <Link>Diversity & Belonging</Link>
            <Link>Accessibility</Link>
            <Link>Airbnb Associates</Link>
            <Link>Frontline Stays</Link>
            <Link>Invite Friends</Link>
          </Stack>
          <Stack>
            <Text fontWeight={700}>Host</Text>
            <Link>Host your home</Link>
            <Link>Host an Online Experience</Link>
            <Link>Host an Experience</Link>
            <Link>Responsible Hosting</Link>
            <Link>Open Homes</Link>
            <Link>Resource Center</Link>
            <Link>Community Center</Link>
          </Stack>
          <Stack>
            <Text fontWeight={700}>Support</Text>
            <Link>Updates for COVID-19</Link>
            <Link>Help Center</Link>
            <Link>Cancellation options</Link>
            <Link>Neighbourhood Support</Link>
            <Link>Trust & Safety</Link>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Flex justify="space-between" py={5} alignItems="center">
          <Stack isInline spacing={2}>
            <Text>&copy; 2020 Airbnb, Inc. All rights reserved</Text>
            <Link>Privacy</Link>
            <Link>Terms</Link>
            <Link>Sitemap</Link>
          </Stack>
          <Stack isInline alignItems="center" spacing={3}>
            <Link>
              <Text>
                <Box as={AiOutlineGlobal} size="24px" display="inline" mr={1} />
                English(IN)
              </Text>
            </Link>
            <Link>&#x20B9; INR</Link>
            <IconButton icon={FaFacebookF} bg="none" />
            <IconButton icon={FaTwitter} bg="none" />
            <IconButton icon={FaInstagram} bg="none" />
          </Stack>
        </Flex>
      </Box>
    );
  }
}

export default Footer;
