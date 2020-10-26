import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/core";
import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { connect } from "react-redux";
import BookingCard from "./BookingCard";
import Description from "./Description";
import ImagePanel from "./ImagePanel";
import Reviews from "./Reviews";

class MainListingShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    };
  }

  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }

  render() {
    console.log(this.props.listing);
    const {
      listing,
      bookings,
      city,
      host,
      images,
      review,
    } = this.props.listing;
    if (Object.keys(this.props.listing).length === 0) {
      return <Skeleton colorStart="pink" colorEnd="orange" height="20px" />;
    }
    return (
      <Box px="80px">
        <Box my={5}>
          <Heading fontFamily="montserrat">Studio apartments</Heading>
          <Flex alignItems="center" my={4} fontWeight={600}>
            <Box
              as={AiOutlineStar}
              size="18px"
              display="inline"
              color="pink.300"
            />
            {listing.avgRating}
            <Text fontFamily="montserrat" pl={4}>
              {listing.address}
            </Text>
          </Flex>
        </Box>
        <ImagePanel url={images} />
        <Flex my={10}>
          <Description
            desc={listing.listingDescription}
            host={host}
            features={listing.features}
          />
          <BookingCard
            price={listing.pricePerDay}
            misc={listing.miscCostPercentage}
            rating={listing.avgRating}
            bookings={bookings}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            guests={this.props.guests}
          />
        </Flex>
        <Divider />

        <Reviews review={review} rating={listing.avgRating} />
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  startDate: state.setDates.startDate,
  endDate: state.setDates.endDate,
  guests: state.setDates.guests,
  listing: state.getCurrentListing,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (id) => dispatch({ type: "getCurrentListing", payload: id }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainListingShowCase);
