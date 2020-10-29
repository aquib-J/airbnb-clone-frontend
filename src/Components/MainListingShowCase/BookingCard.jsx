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
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/core";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineStar } from "react-icons/ai";
import { connect } from "react-redux";
import { toggleModal } from "../../Store/toggle";
import { createBooking } from "../Api";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

export class BookingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: this.props.startDate ? this.props.startDate : new Date(),
      endDate: this.props.endDate ? this.props.endDate : new Date(),
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

  createDateArray = (start, end) => {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  handleBooking = async () => {
    if (!this.props.state.user.currentUser) {
      this.props.toggle();
    } else {
      let obj = {
        userId: this.props.state.user.currentUser.id,
        listingId: this.props.id,
        checkinDate: this.state.startDate,
        checkoutDate: this.state.endDate,
      };
      let res = await createBooking(obj);
      this.props.history.push(`/profile`);
    }
  };

  render() {
    const ExampleCustomInput = ({ value, onClick }) => (
      <Button
        onClick={onClick}
        _focus={{ outline: "none" }}
        color="#b0b0b0"
        bg="none"
        variant="link"
      >
        {value}
      </Button>
    );
    const excludedDates = this.props.bookings.length
      ? this.createDateArray(
          this.props.bookings[0].checkinDate,
          this.props.bookings[0].checkoutDate
        )
      : [];
    const numberOfDays =
      Math.ceil(
        Math.abs(this.state.startDate - this.state.endDate) /
          (1000 * 60 * 60 * 24)
      ) + 1;
    const rent = this.props.price * numberOfDays;
    const misc = (this.props.price * this.props.misc) / 100;
    const taxes = (this.props.price * (this.props.misc + 1)) / 100;
    const total = rent + misc + taxes;
    return (
      <Box
        w="35%"
        ml="auto"
        borderWidth="1px"
        rounded="lg"
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
                &#x20B9; {this.props.price}
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
              {this.props.rating}
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
              onChange={this.setStartDate}
              excludeDates={excludedDates}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={new Date()}
              customInput={<ExampleCustomInput />}
            ></DatePicker>
          </Stack>
          <Stack flex="1" p={2} borderLeft="1px" borderColor="#b0b0b0">
            <Box>CheckOut Date</Box>
            <DatePicker
              selected={this.state.endDate}
              selectsEnd
              onChange={this.setEndDate}
              excludeDates={excludedDates}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
              customInput={<ExampleCustomInput />}
            ></DatePicker>
          </Stack>
          <Box w="100%"></Box>
          <Box borderTop="1px" borderColor="#b0b0b0" w="100%">
            <NumberInput
              defaultValue={this.props.guests ? this.props.guests : 1}
              max={this.props.maxGuests}
              min={1}
            >
              <InputGroup size="lg">
                <InputLeftAddon children="Guests" />
                <NumberInputField variant="filled" bg="none" />
              </InputGroup>
              <NumberInputStepper zIndex={1}>
                <NumberIncrementStepper zIndex={1} />
                <NumberDecrementStepper zIndex={1} />
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
          onClick={this.handleBooking}
        >
          Reserve
        </Button>
        <Stack mt={4}>
          <Flex justify="space-between">
            <Box>
              &#x20B9;{this.props.price}x{numberOfDays}
            </Box>
            <Box>&#x20B9;{rent.toFixed(2)}</Box>
          </Flex>
          <Flex justify="space-between">
            <Box>Service Fee</Box>
            <Box>&#x20B9;{misc.toFixed(2)}</Box>
          </Flex>
          <Flex justify="space-between">
            <Box>Taxes</Box>
            <Box>&#x20B9;{taxes.toFixed(2)}</Box>
          </Flex>
        </Stack>
        <Divider />
        <Flex justify="space-between" mt={4}>
          <Box fontWeight={600}>Total</Box>
          <Box fontWeight={600}>&#x20B9;{total.toFixed(2)}</Box>
        </Flex>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleModal()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(BookingCard);
