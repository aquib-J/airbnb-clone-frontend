import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  Input,
  Stack,
} from "@chakra-ui/core";
import Logo from "../Assets/logo3.png";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  handleToggle = () => {
    this.setState({
      show: this.state.show ? false : true,
    });
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  setEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };
  render() {
    const ExampleCustomInput = ({ value, onClick }) => (
      <Button onClick={onClick} color="#adb1c6" bg="none" variant="link">
        {value}
      </Button>
    );
    return (
      <Box
        px="80px"
        w="100%"
        position="sticky"
        top={0}
        bg="white"
        zIndex={10}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.18)"
      >
        <Flex justify="space-between" py={4} flexWrap="wrap">
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
              flex={1}
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
          <Box w="100%"></Box>
          <Flex w="100%" justify="center">
            <Collapse isOpen={this.state.show}>
              <Flex
                align="center"
                border="1px"
                borderRadius="50px"
                borderColor="#dddddd"
                fontSize="14px"
                mt={4}
              >
                <Flex
                  variantColor="teal"
                  variant="ghost"
                  rounded="50px"
                  pl={5}
                  my={0}
                  flexDirection="column"
                  justify="center"
                  display="inline-flex"
                  _hover={{ bg: "#ebebeb" }}
                >
                  <Text fontWeight={600}>Location</Text>
                  <Input
                    variant="unstyled"
                    placeholder="Where are you going?"
                    size="sm"
                  />
                </Flex>
                <PseudoBox
                  rounded="50px"
                  bg="none"
                  px={16}
                  py={3}
                  m="0"
                  as="button"
                  _hover={{ bg: "#ebebeb" }}
                >
                  <Stack spacing={0} textAlign="left">
                    <Box>
                      <Text fontWeight={600}>Check In</Text>
                    </Box>
                    {/* <Box>
                      <Text color="#adb1c6" fontWeight="200">
                        Add Dates
                      </Text>
                    </Box> */}
                    <DatePicker
                      selected={this.state.startDate}
                      selectsStart
                      dateFormat="dd/MM/yyyy"
                      onChange={this.setStartDate}
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      customInput={<ExampleCustomInput />}
                    ></DatePicker>
                  </Stack>
                </PseudoBox>
                <PseudoBox
                  rounded="50px"
                  px={16}
                  py={3}
                  bg="none"
                  m="0"
                  as="button"
                  _hover={{ bg: "#ebebeb" }}
                >
                  <Stack spacing={0} textAlign="left">
                    <Box>
                      <Text fontWeight={600}>Check Out</Text>
                    </Box>
                    {/* <Box>
                      <Text color="#adb1c6" fontWeight="200">
                        Add Dates
                      </Text>
                    </Box> */}
                    <DatePicker
                      selected={this.state.endDate}
                      selectsEnd
                      dateFormat="dd/MM/yyyy"
                      onChange={this.setEndDate}
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      minDate={this.state.startDate}
                      customInput={<ExampleCustomInput />}
                    ></DatePicker>
                  </Stack>
                </PseudoBox>
                <Button
                  rounded="50px"
                  px={8}
                  py={8}
                  m="0"
                  bg="none"
                  _hover={{ bg: "#ebebeb" }}
                >
                  <Stack spacing={0} mr={10} textAlign="left">
                    <Box>
                      <Text fontWeight={600}>Guests</Text>
                    </Box>
                    <Box>
                      <Text color="#adb1c6" fontWeight="200">
                        Add Guests
                      </Text>
                    </Box>
                  </Stack>
                  <Box borderRadius={50} p={3} bg="#f3575e">
                    <Icon name="search-2" color="white" size="22px" />
                  </Box>
                </Button>
              </Flex>
            </Collapse>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default Header;
