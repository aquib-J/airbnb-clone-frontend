import React, { Component } from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Collapse,
  Icon,
  Text,
  PseudoBox,
} from "@chakra-ui/core";
import Logo from "../Assets/logo3.png";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleToggle = () => {
    this.setState({
      show: this.state.show ? false : true,
    });
  };

  render() {
    return (
      <Box px="80px" w="100%" position="fixed" bg="white">
        <Flex justify="space-between" py={4}>
          <Flex alignItems="flex-start" pt={2}>
            <Image h="32px" w="102px" src={Logo} alt="Logo" cursor="pointer" />
          </Flex>
          <Flex flexDirection="column" w={200}>
            <PseudoBox
              as="button"
              display="flex"
              p={2}
              w={300}
              border="1px"
              borderColor="#dddddd"
              borderRadius={50}
              onClick={this.handleToggle}
              outline="none"
              justifyContent="space-between"
              alignItems="center"
              _hover={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.18)",
              }}
            >
              <Text pl={4} fontSize="14px" fontWeight={600}>
                Start your search
              </Text>
              <Box borderRadius={50} px="7px" py="1px" bg="#f3575e">
                <Icon name="search-2" color="white" size="12px" />
              </Box>
            </PseudoBox>
            <Collapse isOpen={this.state.show} w={200}></Collapse>
          </Flex>

          <Box>
            <Button
              mx={2}
              bg="none"
              _hover={{ bg: "#f7f7f7" }}
              borderRadius={50}
              fontSize="14px"
              fontWeight="600"
            >
              Become a host
            </Button>
            <Button
              mx={2}
              bg="transparent"
              leftIcon={AiOutlineGlobal}
              rightIcon="chevron-down"
              _hover={{ bg: "#f7f7f7" }}
              outline="none"
              borderRadius={50}
            />
            <Menu mx={2}>
              <MenuButton
                as={Button}
                variant="outline"
                leftIcon={FaBars}
                rightIcon={AiOutlineUser}
                _hover={{ bg: "#f7f7f7" }}
                borderRadius={50}
                bg="transparent"
              />
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default Header;
