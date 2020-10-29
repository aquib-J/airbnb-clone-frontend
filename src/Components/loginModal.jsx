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
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { toggleModal } from "../Store/toggle";
import { login } from "../Store/login";

// can be moved to redux thunk
import Axios from "axios";

class loginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,

      errorMessage: "generic Error Message",
      showLoginError: "none",
      showSignupError: "none",

      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.initialRef = React.createRef();
    this.finalRef = React.createRef();
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  userLogin = async (e) => {
    e.preventDefault();
    let loginReqBody = {
      email: this.state.email,
      password: this.state.password,
    };
    let res = {};
    try {
      let { data: res } = await Axios.post(
        `https://airbnb-clone-backend-1.herokuapp.com/api/v1/auth/login`,
        loginReqBody
      );

      localStorage.setItem("auth-token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      this.props.login(res.user);
      this.setState({ showLoginError: "none" });
      this.setState({ errorMessage: "" });
      this.props.toggle();
      // breadcrumb with logged in message :TODO
    } catch (err) {
      this.setState({ errorMessage: err.response.data.error });
      this.setState({ showLoginError: " " });
      // console.error(err);
    }
  };

  userSignup = async (e) => {
    e.preventDefault();
    let signupReqBody = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    let res = {};
    try {
      let { data: res } = await Axios.post(
        `https://airbnb-clone-backend-1.herokuapp.com/api/v1/auth/signup`,
        signupReqBody
      );

      localStorage.setItem("auth-token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      this.props.login(res.user);
      this.setState({ showSignupError: "none" });
      this.setState({ errorMessage: "" });
      this.props.toggle();
      // breadcrumb with logged in message :TODO
    } catch (err) {
      this.setState({ errorMessage: err.response.data.error });
      this.setState({ showSignupError: " " });
      // console.error(err);
    }
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
            <ModalHeader>Welcome , {this.state.firstName}</ModalHeader>
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
                  <form onSubmit={(e) => this.userLogin(e)}>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                          onChange={(e) => {
                            this.setState({ email: e.currentTarget.value });
                          }}
                          value={this.state.email}
                          placeholder="Email"
                          ref={this.initialRef}
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                            onChange={(e) => {
                              this.setState({
                                password: e.currentTarget.value,
                              });
                            }}
                            value={this.state.password}
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
                    <Alert status="error" display={this.state.showLoginError}>
                      <AlertIcon />
                      {this.state.errorMessage}
                    </Alert>
                    <ModalFooter>
                      <Button bg="#f3575e" color="white" mr={3} type="submit">
                        Login
                      </Button>
                    </ModalFooter>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form onSubmit={(e) => this.userSignup(e)}>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          onChange={(e) => {
                            this.setState({ firstName: e.currentTarget.value });
                          }}
                          value={this.state.firstName}
                          placeholder="First Name"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel mt={4}>Last Name</FormLabel>
                        <Input
                          onChange={(e) => {
                            this.setState({ lastName: e.currentTarget.value });
                          }}
                          value={this.state.lastName}
                          placeholder="Last Name"
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          onChange={(e) => {
                            this.setState({ email: e.currentTarget.value });
                          }}
                          value={this.state.email}
                          placeholder="Email"
                          type="email"
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                            value={this.state.password}
                            onChange={(e) => {
                              this.setState({
                                password: e.currentTarget.value,
                              });
                            }}
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

                    <Alert status="error" display={this.state.showSignupError}>
                      <AlertIcon />
                      {this.state.errorMessage}
                    </Alert>
                    <ModalFooter>
                      <Button bg="#f3575e" color="white" mr={3} type="submit">
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
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginModal);
