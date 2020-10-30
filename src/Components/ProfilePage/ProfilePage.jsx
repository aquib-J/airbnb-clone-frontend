import {
  Avatar,
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Button,
  Heading,
  Input,
  FormControl,
  Skeleton,
  Stack,
} from "@chakra-ui/core";
import React, { Component } from "react";
import EditableBio from "./EditableBio";
import BookingHistory from "./BookingHistory";
import YourListings from "./YourListings";
import { getUser } from "../Api";
import { connect } from "react-redux";
import { uploadProfileImage, updateUser } from "../Api";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: true,
      selectedFile: null,
      profilePicture: null,
      isLoadingUploadPhoto: false,
    };
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = async () => {
    try {
      this.setState({ isLoadingUploadPhoto: true });
      const data = new FormData();
      data.append("image", this.state.selectedFile);
      const profile = await uploadProfileImage(data);
      console.log(profile.imageUrl);
      const res = await updateUser(this.props.state.user.currentUser.id, {
        profilePictureUrl: profile.imageUrl,
      });
      this.setState({
        isLoadingUploadPhoto: false,
        profilePicture: res.profilePictureUrl,
      });
      console.log(profile);
    } catch (err) {
      this.setState({ isLoadingUploadPhoto: false });
      console.log({ err: err });
    }
  };

  async componentDidMount() {
    let user = await getUser(this.props.state.user.currentUser.id);
    this.setState({
      user,
      isLoading: false,
      profilePicture: user.profilePictureUrl,
    });
    console.log(user);
  }

  render() {
    return (
      <Box px="120px" py={10}>
        <Flex w="100%">
          {this.state.isLoading ? (
            <Stack w="70%">
              <Skeleton height="20px" my="10px" w="100%" />
              <Skeleton height="20px" my="10px" w="100%" />
              <Skeleton height="20px" my="10px" w="100%" />
            </Stack>
          ) : (
            <EditableBio
              {...this.state.user}
              user={this.props.state.user.currentUser.id}
            />
          )}

          <Flex flexDirection="column" align="center" ml="auto">
            <Skeleton isLoaded={!this.state.isLoading}>
              <Avatar
                h={200}
                w={200}
                name="Segun Adebayo"
                src={this.state.profilePicture}
                mb={5}
              />
            </Skeleton>
            <Skeleton mt={5} isLoaded={!this.state.isLoading}>
              <FormControl>
                <Input
                  type="file"
                  size="sm"
                  onChange={this.onFileChange}
                ></Input>
                <Button
                  isLoading={this.state.isLoadingUploadPhoto}
                  onClick={this.onFileUpload}
                >
                  Upload
                </Button>
              </FormControl>
            </Skeleton>
          </Flex>
        </Flex>
        <Accordion allowToggle allowMultiple py={5}>
          <AccordionItem borderTop="none" defaultIsOpen={false}>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Heading>Booking history</Heading>
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
                      {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  {this.state.isLoading ? (
                    <Stack isInline spacing={10}>
                      <Skeleton height="300px" my="10px" w="200px" />
                      <Skeleton height="300px" my="10px" w="200px" />
                      <Skeleton height="300px" my="10px" w="200px" />
                    </Stack>
                  ) : (
                    <BookingHistory
                      bookings={[...this.state.user.bookingHistory]}
                    />
                  )}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <Flex justify="space-between">
                  <Box flex="100%" pb={isExpanded ? 4 : 8} pt={8}>
                    <Heading>Your listings</Heading>
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
                      {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </AccordionHeader>
                </Flex>
                <AccordionPanel mb={4}>
                  <AccordionPanel mb={4}>
                    {this.state.isLoading ? (
                      <Stack isInline spacing={10}>
                        <Skeleton height="300px" my="10px" w="300px" />
                        <Skeleton height="300px" my="10px" w="300px" />
                        <Skeleton height="300px" my="10px" w="300px" />
                      </Stack>
                    ) : (
                      <YourListings
                        listings={[...this.state.user.hostListing].slice(0, 4)}
                      />
                    )}
                  </AccordionPanel>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(ProfilePage);
