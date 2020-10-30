import React, { Component } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  Text,
  Flex,
  Box,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { toggleConfirmation } from "../Store/toggle";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class BookingConfirmModal extends Component {
  render() {
    return (
      <>
        <Modal isOpen={this.props.isOpen} onClose={this.props.toggle}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily="montserrat">
              Booking Confirmed !!
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Icon name="check" size="32px" color="green.500" d="inline" />
                <Box ml={5}>
                  <Text fontFamily="montserrat" fontWeight={600}>
                    Congratulations.. {this.props.user}
                  </Text>
                  <Text fontFamily="montserrat">
                    Your booking has been confirmed
                  </Text>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Flex align="center">
                <Text as="i" mr={5} fontSize={12}>
                  Please click here to go to your profile
                </Text>
                <Button
                  variantColor="blue"
                  mr={3}
                  onClick={() => {
                    this.props.toggle();
                    this.props.history.push(`/profile`);
                  }}
                >
                  Click
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser.firstName,
  isOpen: state.toggle.confirmOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleConfirmation()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(BookingConfirmModal);
