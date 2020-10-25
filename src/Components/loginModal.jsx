import React, { Component } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { toggleModal } from "../Store/reducer";

class loginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Modal
          isOpen={this.props.isOpen}
          onClose={this.props.toggle}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Save
              </Button>
              <Button>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginModal);
