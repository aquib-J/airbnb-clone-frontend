import {
  Box,
  Button,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Stack,
  PopoverArrow,
  PopoverCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Skeleton,
} from "@chakra-ui/core";
import React, { Component } from "react";
import { getListings } from "../Api";
import ListingCard from "./ListingCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LisitngsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalListings: [],
      listings: [],
      location: "",
      priceSort: false,
      rooms: 1,
      beds: 1,
      filterApplied: false,
      sortHighToLow: false,
      sortLowToHigh: false,
      sortByRating: false,
    };
  }

  async componentDidMount() {
    try {
      await this.setState({ location: this.props.match.params.cityName });
      let listings = await getListings(this.state.location);
      this.setState({ listings, originalListings: listings });
      console.log(listings);
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      await this.setState({
        location: this.props.match.params.cityName,
      });
      let listings = await getListings(this.state.location);
      this.setState({ listings, originalListings: listings });
    }
  }

  handleLowToHighPriceSort = () => {
    let listingsCopy = [...this.state.listings];
    listingsCopy.sort((a, b) => {
      return a.pricePerDay - b.pricePerDay;
    });
    this.setState({
      listings: listingsCopy,
      sortLowToHigh: true,
      sortHighToLow: false,
    });
  };

  handleHighToLowPriceSort = () => {
    let listingsCopy = [...this.state.listings];
    listingsCopy.sort((a, b) => {
      return b.pricePerDay - a.pricePerDay;
    });
    this.setState({
      listings: listingsCopy,
      sortLowToHigh: false,
      sortHighToLow: true,
    });
  };

  handleRoomsAndBedsFilter = (e) => {
    e.preventDefault();
    let listingsCopy = [...this.state.listings].filter(
      (listing) =>
        listing.features.beds >= this.state.beds &&
        listing.features.bedrooms >= this.state.rooms
    );

    this.setState(
      {
        listings: listingsCopy,
        filterApplied: true,
      },
      () => console.log(this.state)
    );
  };

  handleRatingSort = () => {
    let listingsCopy = [...this.state.listings];
    listingsCopy.sort((a, b) => {
      return b.avgRating - a.avgRating;
    });
    this.setState({
      listings: listingsCopy,
      sortByRating: true,
    });
  };

  handleClearFilters = () => {
    let listingsCopy = [...this.state.originalListings];
    this.setState({
      listings: listingsCopy,
      filterApplied: false,
      sortByRating: false,
      sortHighToLow: false,
      sortLowToHigh: false,
    });
  };

  render() {
    return (
      <Box px="80px" py={10}>
        <Heading fontFamily="Montserrat" mb={3} fontWeight={600}>
          Stays Nearby {this.props.city}
        </Heading>
        <Stack spacing={4} isInline>
          <Button
            variant="outline"
            rounded="50px"
            onClick={this.handleLowToHighPriceSort}
            fontWeight={400}
            borderWidth={this.state.sortLowToHigh ? 2 : 1}
            borderColor={this.state.sortLowToHigh ? "black" : "#e9edf4"}
            _focus={{ outline: "none" }}
          >
            Price Low to High
          </Button>
          <Button
            variant="outline"
            rounded="50px"
            onClick={this.handleHighToLowPriceSort}
            fontWeight={400}
            _focus={{ outline: "none" }}
            borderWidth={this.state.sortHighToLow ? 2 : 1}
            borderColor={this.state.sortHighToLow ? "black" : "#e9edf4"}
          >
            Price High to Low
          </Button>

          <Box>
            <Popover>
              {({ isOpen, onClose }) => (
                <>
                  <PopoverTrigger>
                    <Button
                      variant="outline"
                      rounded="50px"
                      fontWeight={400}
                      _focus={{ outline: "none" }}
                      borderWidth={this.state.filterApplied ? 2 : 1}
                      borderColor={
                        this.state.filterApplied ? "black" : "#e9edf4"
                      }
                    >
                      Rooms and Beds
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent zIndex={4} _focus={{ outline: "none" }}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>
                      <FormLabel>Beds</FormLabel>
                      <NumberInput
                        size="sm"
                        defaultValue={this.state.beds}
                        min={1}
                        mb={2}
                        onChange={(e) => {
                          this.setState({ beds: e });
                        }}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <FormLabel>BedRooms</FormLabel>
                      <NumberInput
                        size="sm"
                        defaultValue={this.state.rooms}
                        min={1}
                        onChange={(e) => {
                          this.setState({ rooms: e });
                        }}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </PopoverBody>
                    <PopoverFooter>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          onClose();
                          this.handleRoomsAndBedsFilter(e);
                        }}
                      >
                        Apply
                      </Button>
                    </PopoverFooter>
                  </PopoverContent>
                </>
              )}
            </Popover>
          </Box>
          <Button
            variant="outline"
            rounded="50px"
            onClick={this.handleRatingSort}
            fontWeight={400}
            _focus={{ outline: "none" }}
            borderColor={this.state.sortByRating ? "black" : "#e9edf4"}
            borderWidth={this.state.sortByRating ? 2 : 1}
          >
            Rating
          </Button>
          {this.state.filterApplied ? (
            <Button
              variant="link"
              rounded="50px"
              ml="auto"
              onClick={this.handleClearFilters}
              fontWeight={400}
              _focus={{ outline: "none" }}
            >
              &#10005; Clear All
            </Button>
          ) : (
            <Box></Box>
          )}
        </Stack>
        {this.state.listings.length ? (
          this.state.listings == "we are not yet operational in this city" ? (
            <Box my={4}>Oh Snap ! We are not yet operational in this city</Box>
          ) : (
            this.state.listings.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))
          )
        ) : (
          <Stack spacing={10}>
            <Skeleton height="20px" my="10px" w="100%" />
            <Skeleton height="20px" my="10px" w="100%" />
            <Skeleton height="20px" my="10px" w="100%" />
          </Stack>
        )}
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.setDates.city,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (id) => dispatch({ type: "getCurrentListing", payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LisitngsPage);
