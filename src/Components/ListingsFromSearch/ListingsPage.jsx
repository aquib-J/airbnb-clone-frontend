import { Box, Button, ButtonGroup, Heading, Spinner } from "@chakra-ui/core";
import React, { Component } from "react";
import { getListings } from "../Api";
import ListingCard from "./ListingCard";
import Axios from "axios";

class LisitngsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      location: "",
    };
  }

  async componentDidMount() {
    await this.setState({ location: this.props.match.params.cityName });
    let listings = await getListings(this.state.location);
    this.setState({ listings });
    console.log(listings);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      await this.setState({
        location: this.props.match.params.cityName,
      });
      let listings = await getListings(this.state.location);
      this.setState({ listings });
    }
  }

  render() {
    return (
      <Box px="80px" py={10}>
        <Heading fontFamily="Montserrat" mb={3} fontWeight={600}>
          Stays Nearby
        </Heading>
        <ButtonGroup spacing={4}>
          <Button variant="outline" rounded="50px">
            Price
          </Button>
          <Button variant="outline" rounded="50px">
            Rooms and Beds
          </Button>
          <Button variant="outline" rounded="50px">
            Location
          </Button>
          <Button variant="outline" rounded="50px">
            Rating
          </Button>
        </ButtonGroup>
        {this.state.listings.length ? (
          this.state.listings == "we are not yet operational in this city" ? (
            <Box my={4}>Oh Snap ! We are not yet operational in this city</Box>
          ) : (
            this.state.listings.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))
          )
        ) : (
          <Box my={4}>
            <Spinner size="xl" />
          </Box>
        )}
      </Box>
    );
  }
}

export default LisitngsPage;
