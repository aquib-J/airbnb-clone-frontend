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
} from "@chakra-ui/core";
import React, { Component } from "react";
import DatePicker from "react-datepicker";

class EditableBio extends Component {
  render() {
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
                        : "Raghav Singhal"}
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
                    <Flex justify="space-between" mb={4}>
                      <FormControl>
                        <FormLabel htmlFor="email">First Name</FormLabel>
                        <Input type="text" id="firstName" />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="email">Last Name</FormLabel>
                        <Input type="text" id="lastName" />
                      </FormControl>
                    </Flex>
                    <Button variantColor="teal">Save</Button>
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
                        : "asinghal279@gmail.com"}
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
                    <Flex justify="space-between" mb={4}>
                      <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="email" id="firstName" />
                      </FormControl>
                    </Flex>
                    <Button variantColor="teal">Save</Button>
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
                      {isExpanded ? "" : "xyz"}
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
                  <DatePicker
                    selected={new Date()}
                    customInput={<ExampleCustomInput />}
                    minDate={new Date()}
                  ></DatePicker>
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
                  <Textarea placeholder="Intro..." />
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
