import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from "@chakra-ui/core";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineStar } from "react-icons/ai";

export class BookingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
  }

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
      <Button onClick={onClick} color="#b0b0b0" bg="none" variant="link">
        {value}
      </Button>
    );
    return (
      <Box
        w="35%"
        ml="auto"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        position="sticky"
        top="110px"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 6px 16px"
        p="6"
        h="fit-content"
      >
        <Box>
          <Box d="flex" justifyContent="space-between" alignItems="baseline">
            <Box d="flex" alignItems="baseline">
              <Heading fontWeight="600" fontFamily="montserrat">
                &#x20B9; 1200
              </Heading>
              <Box as="span" color="gray.600" fontSize="sm">
                / night
              </Box>
            </Box>
            <Box fontWeight={500}>
              <Box
                as={AiOutlineStar}
                size="16px"
                display="inline"
                color="pink.300"
              />
              5.0
            </Box>
          </Box>
        </Box>
        <Flex
          flexWrap="wrap"
          border="1px"
          borderColor="#b0b0b0"
          rounded="lg"
          my={5}
        >
          <Stack flex="1" p={2}>
            <Box>CheckIn Date</Box>
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
          <Stack flex="1" p={2} borderLeft="1px" borderColor="#b0b0b0">
            <Box>CheckOut Date</Box>
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
          <Box w="100%"></Box>
          <Box borderTop="1px" p={2} borderColor="#b0b0b0" w="100%">
            Guests
            <NumberInput defaultValue={2} min={10} max={20}>
              <NumberInputField variant="filled" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
        <Button
          fontWeight="500"
          w="100%"
          bg="rgb(227 28 95)"
          rounded="lg"
          color="white"
          size="lg"
        >
          Reserve
        </Button>
        <Stack mt={4}>
          <Flex justify="space-between">
            <Box>&#x20B9;1200x2nights</Box>
            <Box>2400</Box>
          </Flex>
          <Flex justify="space-between">
            <Box>Service Fee</Box>
            <Box>&#x20B9;339</Box>
          </Flex>
          <Flex justify="space-between">
            <Box>Taxes</Box>
            <Box>288</Box>
          </Flex>
        </Stack>
        <Divider />
        <Flex justify="space-between" mt={4}>
          <Box fontWeight={600}>Total</Box>
          <Box fontWeight={600}>&#x20B9;3027</Box>
        </Flex>
      </Box>
    );
  }
}

export default BookingCard;
