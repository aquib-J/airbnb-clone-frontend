import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Option,
  Select,
  Button,
  useToast,
  Text,
  Flex,
  NumberInput,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Heading,
  Input,
  Checkbox,
  CheckboxGroup,
  Textarea,
} from "@chakra-ui/core";
import {
  getAllCountry,
  getAllState,
  getAllCity,
  uploadListingImages,
  createListing,
} from "../Api";
import { connect } from "react-redux";

class startYourListingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCreated: false,
      submitSpinner: false,
      typePlace: "flat",
      roomType: "Entire Place",
      numberOfGuest: 1,
      bedRoom: 1,
      beds: 1,
      bathroom: 1,
      countryList: [],
      stateList: [{ id: 0, stateName: "Choose country first" }],
      cityList: [{ id: 0, cityName: "Choose county first" }],
      selectedCity: null,
      address: null,
      listingDescribe: null,
      title: null,
      price: null,
      selectedFile: null,
      amenities: [
        { id: "essentials", value: false, as: "essentials" },
        { id: "wifi", value: false, as: "Wifi" },
        { id: "tv", value: false, as: "Television" },
        { id: "heating", value: false, as: "Heating in room" },
        { id: "ac", value: false, as: "Air conditioner" },
        { id: "iron", value: false, as: "Iron" },
        { id: "privateEntrance", value: false, as: "Private Entrance" },
        { id: "desk", value: false, as: "Desk/workspace" },
        { id: "firePlace", value: false, as: "FirePlace" },
        { id: "breakFast", value: false, as: "Breakfast, coffee, tea" },
      ],
    };
  }

  async componentDidMount() {
    let countryList = await getAllCountry();
    this.setState({
      countryList: [{ id: 0, countryName: "Choose country" }, ...countryList],
    });
  }
  price = (e) => this.setState({ price: e.target.value });
  numberOfGuestHandleChange = (value) =>
    this.setState({ numberOfGuest: value });
  bedRoomHandleChange = (value) => this.setState({ bedRoom: value });
  bedHandleChange = (value) => this.setState({ beds: value });
  bathroomHandleChange = (value) => this.setState({ bathroom: value });
  address = (e) => this.setState({ address: e.target.value });

  fetchState = async (e) => {
    const stateList = await getAllState(e.target.value);
    this.setState({ stateList });
    this.setState({ cityList: [{ id: 0, cityName: "Choose county first" }] });
  };

  fetchCity = async (e) => {
    const cityList = await getAllCity(e.target.value);
    this.setState({
      cityList: [{ id: 0, cityName: "Choose county first" }, ...cityList],
    });
  };

  typeOfPlace = (e) => this.setState({ typePlace: e.target.value });
  roomType = (e) => this.setState({ roomType: e.target.value });
  selectedCity = (e) => this.setState({ selectedCity: e.target.value });
  title = (e) => this.setState({ title: e.target.value });
  toggleAmenities = (id) => {
    const amenities = this.state.amenities.map((data) => {
      if (data.id === id) {
        data.value = data.value ? false : true;
      }
      return data;
    });
    this.setState({ amenities });
  };
  handleListingDescribeInputChange = (e) =>
    this.setState({ listingDescribe: e.target.value });

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files });
  };

  onFileUpload = async () => {
    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("images", this.state.selectedFile[x]);
    }
    return await uploadListingImages(data);
  };

  validationData = () => {
    if (this.state.selectedCity.id === 0) {
      console.log("city can't be empty");
      return false;
    }
    return true;
  };

  submitForm = async (e) => {
    try {
      this.setState({ submitSpinner: true });
      e.preventDefault();
      if (!this.validationData()) {
        return;
      }
      const ImageUrl = await this.onFileUpload();

      const paramsData = {
        listingDetails: {
          hostID: this.props.state.user.currentUser.id,
          pricePerDay: this.state.price,
          miscCostPercentage: 10,
          address: this.state.address,
          listingDescription: this.state.listingDescribe,
          avgRating: 5,
          cityId: this.state.selectedCity,
          // "title":this.state.title,
          features: {
            beds: this.state.beds,
            bedrooms: this.state.bedRoom,
            policies: {},
            amenities: this.state.amenities,
            bathrooms: this.state.bathroom,
            maxOccupants: this.state.numberOfGuest,
            typeofListing: this.state.typePlace,
            roomType: this.state.roomType,
          },
        },
        listingImages: ImageUrl,
      };
      console.log(paramsData);
      this.setState({ submitSpinner: false });
      const createdList = await createListing(paramsData);
      console.log(`success listingId:`, createdList);
      this.props.history.push(`/listing/${createdList.id}`);
      // const toast = useToast();
      // toast({
      //     title: "Listing created.",
      //     description: `We've created your ${createdList.id} listing for you`,
      //     status: "success",
      //     duration: 9000,
      //     isClosable: true,
      // })
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Box bg="gray.100" p="1">
        <Box bg="white" m="1em" p="1em">
          <Box width="60%" m="auto">
            <Text fontSize="3xl" mt="1em" mb="1em" fontWeight="semibold">
              Add your listing
            </Text>
            <form onSubmit={this.submitForm}>
              <FormControl>
                <Box>
                  <FormLabel htmlFor="placeType" fontWeight="semibold">
                    Type of place
                  </FormLabel>
                  <Select
                    value={this.state.typePlace}
                    onChange={(e) => this.typeOfPlace(e)}
                  >
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                  </Select>
                  <FormLabel htmlFor="placeType" fontWeight="semibold" mt="1em">
                    Confirm the type of place guests will have
                  </FormLabel>
                  <Select
                    value={this.state.roomType}
                    onChange={(e) => this.roomType(e)}
                  >
                    <option value="Entire place">Entire place</option>
                    <option value="Private room">Private room</option>
                  </Select>
                  <FormLabel htmlFor="placeType" fontWeight="bold" mt="2em">
                    Confirm the type of place guests will have
                  </FormLabel>
                  <Flex
                    alignItems="center"
                    mt="1em"
                    justifyContent="space-between"
                    width="25em"
                  >
                    <Text fontWeight="semibold">
                      Maximum number of Guest allowed
                    </Text>

                    <NumberInput
                      maxW="100px"
                      max={10}
                      min={1}
                      keepWithinRange={true}
                      mr="2rem"
                      value={this.state.numberOfGuest}
                      onChange={this.numberOfGuestHandleChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                  <Flex
                    alignItems="center"
                    mt="1em"
                    justifyContent="space-between"
                    width="25em"
                  >
                    <Text fontWeight="semibold">Total Bedrooms</Text>
                    <NumberInput
                      maxW="100px"
                      max={10}
                      min={1}
                      keepWithinRange={true}
                      mr="2rem"
                      value={this.state.bedRoom}
                      onChange={this.bedRoomHandleChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                  <Flex
                    alignItems="center"
                    mt="1em"
                    justifyContent="space-between"
                    width="25em"
                  >
                    <Text fontWeight="semibold">Total Beds</Text>
                    <NumberInput
                      maxW="100px"
                      max={10}
                      min={1}
                      keepWithinRange={true}
                      mr="2rem"
                      value={this.state.beds}
                      onChange={this.bedHandleChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                  <Flex
                    alignItems="center"
                    mt="1em"
                    justifyContent="space-between"
                    width="25em"
                  >
                    <Text fontWeight="semibold">Bathrooms</Text>
                    <NumberInput
                      maxW="100px"
                      max={10}
                      min={1}
                      keepWithinRange={true}
                      mr="2rem"
                      value={this.state.bathroom}
                      onChange={this.bathroomHandleChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Flex>
                  <Box mt="2em">
                    <Heading as="h3">Where’s your place located?</Heading>
                    <FormLabel
                      htmlFor="placeType"
                      fontWeight="semibold"
                      mt="1em"
                    >
                      Country / Region
                    </FormLabel>
                    <Select onChange={(e) => this.fetchState(e)}>
                      {this.state.countryList.map((val) => {
                        return (
                          <option value={`${val.id}`}>{val.countryName}</option>
                        );
                      })}
                    </Select>
                    <FormLabel
                      htmlFor="placeType"
                      fontWeight="semibold"
                      mt="1em"
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      id="address"
                      value={this.state.address}
                      isRequired
                      onChange={(e) => this.address(e)}
                    />
                    <Flex justifyContent="space-between">
                      <Flex mr="1em" flexGrow="1" flexDirection="column">
                        <FormLabel
                          htmlFor="placeType"
                          fontWeight="semibold"
                          mt="1em"
                        >
                          County
                        </FormLabel>
                        <Select onChange={(e) => this.fetchCity(e)}>
                          {this.state.stateList.map((val) => {
                            return (
                              <option value={`${val.id}`}>
                                {val.stateName}
                              </option>
                            );
                          })}
                        </Select>
                      </Flex>
                      <Flex flexGrow="1" flexDirection="column">
                        <FormLabel
                          htmlFor="placeType"
                          fontWeight="semibold"
                          mt="1em"
                        >
                          City
                        </FormLabel>
                        <Select onChange={(e) => this.selectedCity(e)}>
                          {this.state.cityList.map((val) => {
                            return (
                              <option value={`${val.id}`}>
                                {val.cityName}
                              </option>
                            );
                          })}
                        </Select>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box mt="3em">
                    <Heading as="h3">What amenities do you offer?</Heading>
                    <Text as="span">
                      These are just the amenities guests usually expect, but
                      you can add even more after you publish.
                    </Text>
                    <Box>
                      {this.state.amenities.map((data) => {
                        return (
                          <Box mt="1em">
                            <Checkbox
                              value={data.id}
                              size="lg"
                              isChecked={data.value}
                              onChange={(e) => this.toggleAmenities(data.id)}
                            >
                              {data.as}
                            </Checkbox>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box mt="3em">
                    <Heading as="h3">Describe your place to guests</Heading>
                    <Text as="span">
                      Mention the best features of your space, any special
                      amenities like fast wifi or parking, and what you love
                      about the neighbourhood.
                    </Text>
                    <Box>
                      <Textarea
                        value={this.state.listingDescribe}
                        onChange={this.handleListingDescribeInputChange}
                        placeholder="Describe your place to guests"
                        size="sm"
                        mt="1em"
                      />
                    </Box>
                  </Box>
                  <Box mt="3em">
                    <Heading as="h3">Create a title for your listing</Heading>
                    <Text>
                      Catch guests’ attention with a listing title that
                      highlights what makes your place special.
                    </Text>
                    <FormLabel
                      htmlFor="placeType"
                      fontWeight="semibold"
                      mt="1em"
                    >
                      Listing Title
                    </FormLabel>
                    <Box>
                      <Input
                        value={this.state.title}
                        onChange={this.title}
                        size="lg"
                        mt="1em"
                      />
                    </Box>
                  </Box>
                  <Box mt="3em">
                    <Heading as="h3">Price your space</Heading>
                    <Text>
                      This will be your default price for days when you decide
                      to turn off Smart Pricing. Keep in mind that Airbnb adds a
                      9-14% guest service fee to your price.
                    </Text>
                    <FormLabel
                      htmlFor="placeType"
                      fontWeight="semibold"
                      mt="1em"
                    >
                      Base Price
                    </FormLabel>
                    <Box>
                      <Input
                        value={this.state.price}
                        type="number"
                        onChange={this.price}
                        size="lg"
                        mt="1em"
                      />
                    </Box>
                  </Box>
                  <Box mt="3em">
                    <Heading as="h3">Liven up your listing with photos</Heading>
                    <Text>
                      Take photos using a phone or camera. Upload at least one
                      photo to publish your listing – you can always add more or
                      edit later.
                    </Text>
                    <FormLabel
                      htmlFor="placeType"
                      fontWeight="semibold"
                      mt="1em"
                    >
                      picture url
                    </FormLabel>
                    <Box>
                      <Input
                        value={this.state.listingImage}
                        onChange={this.onFileChange}
                        type="file"
                        multiple
                        size="sm"
                      />
                      {/* <Button onClick={this.onFileUpload}> 
                                                Upload! 
                                            </Button>  */}
                    </Box>
                  </Box>
                </Box>
                <Button
                  mt={4}
                  variantColor="teal"
                  type="submit"
                  isLoading={this.state.submitSpinner}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(startYourListingForm);
