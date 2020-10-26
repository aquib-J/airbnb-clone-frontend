import React, { Component } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { toggleModal } from "../Store/toggle";

class loginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.initialRef = React.createRef();
    this.finalRef = React.createRef();
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <Modal
          initialFocusRef={this.initialRef}
          finalFocusRef={this.finalRef}
          isOpen={this.props.isOpen}
          onClose={this.props.toggle}
          isCentered
        >
          <ModalOverlay />
          <ModalContent rounded="lg">
            <ModalHeader>Welcome</ModalHeader>
            <ModalCloseButton />
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab fontWeight={600} _focus={{ boxShadow: "none" }}>
                  Login
                </Tab>
                <Tab fontWeight={600} _focus={{ boxShadow: "none" }}>
                  SignUp
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>User Name</FormLabel>
                        <Input placeholder="First name" ref={this.initialRef} />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                            pr="4.5rem"
                            type={this.state.show ? "text" : "password"}
                            placeholder="Enter password"
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              h="1.75rem"
                              size="sm"
                              onClick={this.handleShow}
                            >
                              {this.state.show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button bg="#f3575e" color="white" mr={3}>
                        Login
                      </Button>
                    </ModalFooter>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Name" />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Email" type="email" />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                            pr="4.5rem"
                            type={this.state.show ? "text" : "password"}
                            placeholder="Enter password"
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              h="1.75rem"
                              size="sm"
                              onClick={this.handleShow}
                            >
                              {this.state.show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button bg="#f3575e" color="white" mr={3}>
                        SignUp
                      </Button>
                    </ModalFooter>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.toggle.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginModal);
