import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { updateUser } from "../Api";

class EditableBio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      dob: this.props.dob,
      intro: this.props.introductionOfUser,
      password: this.props.password,
      show: false,
      isLoadingForName: false,
      isLoadingForEmail: false,
      isLoadingForPass: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleShowPass = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleUpdateProfile = async (e, params) => {
    e.preventDefault();
    this.setState({
      isLoadingForName: true,
      isLoadingForEmail: true,
      isLoadingForPass: true,
    });
    let res = await updateUser(1, params);
    this.setState({
      firstName: res.firstName,
      lastName: res.lastName,
      email: res.email,
      dob: res.dob,
      intro: res.introductionOfUser,
      password: res.password,
      isLoadingForName: false,
      isLoadingForEmail: false,
      isLoadingForPass: false,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setState({
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
        dob: this.props.dob,
        intro: this.props.introductionOfUser,
        password: this.props.password,
      });
    }
  }

  render() {
    console.log(this.props);
    const ExampleCustomInput = ({ value, onClick }) => (
      <Button
        onClick={onClick}
        bg="none"
        variant="link"
        _focus={{ outline: "none", bg: "none" }}
        fontWeight={400}
        variantColor="teal"
        fontSize={18}
        fontFamily="montserrat"
      >
        {value}
      </Button>
    );
    let dateObj =
      this.state.dob === undefined ? new Date() : new Date(this.state.dob);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;

    return (
      <Box w="60%">
        <Heading>Personal Info</Heading>
        <Accordion allowToggle py={5}>
          <AccordionItem borderTop="none" defaultIsOpen={false}>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Text fontFamily="montserrat" fontWeight={600} mb={2}>
                      Legal Name
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={isExpanded ? 13 : 14}
                    >
                      {isExpanded
                        ? " This is the name on your travel document, which could be alicence or a passport."
                        : `${this.state.firstName} ${this.state.lastName}`}
                    </Text>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Edit"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <form
                    onSubmit={(e) =>
                      this.handleUpdateProfile(e, {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                      })
                    }
                  >
                    <Flex justify="space-between" mb={4}>
                      <FormControl>
                        <FormLabel htmlFor="email">First Name</FormLabel>
                        <Input
                          type="text"
                          id="firstName"
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="email">Last Name</FormLabel>
                        <Input
                          type="text"
                          id="lastName"
                          value={this.state.lastName}
                          onChange={this.handleInputChange}
                        />
                      </FormControl>
                    </Flex>
                    <FormControl>
                      <Button
                        variantColor="teal"
                        type="submit"
                        isLoading={this.state.isLoadingForName}
                        loadingText="Saving"
                      >
                        Save
                      </Button>
                    </FormControl>
                  </form>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Text fontFamily="montserrat" fontWeight={600} mb={2}>
                      Email
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={isExpanded ? 13 : 14}
                    >
                      {isExpanded
                        ? "Use an address you’ll always have access to."
                        : this.state.email}
                    </Text>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Edit"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <form
                    onSubmit={(e) =>
                      this.handleUpdateProfile(e, {
                        email: this.state.email,
                      })
                    }
                  >
                    <Flex justify="space-between" mb={4}>
                      <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          type="email"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                      </FormControl>
                    </Flex>
                    <Button
                      variantColor="teal"
                      type="submit"
                      isLoading={this.state.isLoadingForEmail}
                      loadingText="Saving"
                    >
                      Save
                    </Button>
                  </form>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" py={8}>
                    <Text fontFamily="montserrat" fontWeight={600} mb={2}>
                      Password
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={isExpanded ? 13 : 14}
                    >
                      {!isExpanded ? "Expand to change password" : ""}
                    </Text>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Edit"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <form
                    onSubmit={(e) =>
                      this.handleUpdateProfile(e, {
                        password: this.state.password,
                      })
                    }
                  >
                    <InputGroup size="md" mb={4}>
                      <Input
                        pr="4.5rem"
                        type={this.state.show ? "text" : "password"}
                        placeholder="Enter password"
                        value={this.state.password}
                        id="password"
                        onChange={this.handleInputChange}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={this.handleShowPass}
                        >
                          {this.state.show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      variantColor="teal"
                      type="submit"
                      isLoading={this.state.isLoadingForPass}
                      loadingText="Saving"
                    >
                      Save
                    </Button>
                  </form>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Text fontFamily="montserrat" fontWeight={600} mb={2}>
                      DOB
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={isExpanded ? 13 : 14}
                    >
                      {isExpanded ? "" : newdate}
                    </Text>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Edit"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <Flex align="center">
                    <DatePicker
                      selected={
                        this.state.dob === undefined
                          ? new Date()
                          : new Date(this.state.dob)
                      }
                      customInput={<ExampleCustomInput />}
                    ></DatePicker>
                    <Button variantColor="teal" ml={10}>
                      Save
                    </Button>
                  </Flex>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" py={8}>
                    <Text fontFamily="montserrat" fontWeight={600} mb={2}>
                      Introduction
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={isExpanded ? 13 : 14}
                    >
                      {!isExpanded ? "Expand to edit introduction" : ""}
                    </Text>
                  </Box>
                  <AccordionHeader
                    flex={1}
                    _hover={{ bg: "none" }}
                    _focus={{ outline: "none" }}
                  >
                    <Button
                      variant="link"
                      variantColor="teal"
                      _focus={{ outline: "none" }}
                    >
                      {isExpanded ? "Collapse" : "Edit"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <form>
                    <Textarea
                      placeholder="Intro..."
                      id="intro"
                      value={this.state.intro}
                      onChange={this.handleInputChange}
                      mb={4}
                    />
                    <Button variantColor="teal">Save</Button>
                  </form>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    );
  }
}

export default EditableBio;
