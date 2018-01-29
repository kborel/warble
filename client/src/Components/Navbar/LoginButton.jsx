import React, { Component } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
import StyledInput from '../Input';

class LoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit() {
    const { username, password } = this.state;
    this.props.loginUser(username, password);
    this.setState({
      modalIsOpen: false,
      username: '',
      password: '',
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <Button onClick={() => this.setState({ modalIsOpen: true })}>Login</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          appElement={document.getElementById('root')}
          style={{
            overlay: {
              backgroundColor: 'rgba(51, 51, 51, 0.90)',
            },
            content: {
              width: '600px',
              height: '350px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        >
          <ModalHeader>
            <b>Log in to Warble</b>
            <CloseModalButton onClick={this.closeModal} />
          </ModalHeader>
          <ModalBody>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
            <br />
            <Button onClick={this.onSubmit}>Log In</Button>
          </ModalBody>
          <ModalFooter>
            <p>
              Don&apos;t have an account?&nbsp;
              <Link onClick={this.closeModal} to="/signup">Sign up »</Link>
            </p>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

const CloseModalButton = styled.input.attrs({
  value: '\u2715',
  type: 'button',
})`
  border: none;
  color: gray;
  font-size: 1em;
  background-color: white;
  float: right;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  height: 50px;
  border-bottom: solid 1px lightgray;
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const ModalBody = styled.div`
  text-align: center;
  border-bottom: solid 1px lightgray;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  text-align: center;
  color: gray;
`;

const Input = StyledInput.extend`
  padding: 5px;
  margin-bottom: 10px;
  width: 300px;
  font-weight: normal;

  &::placeholder {
    color: gray;
  }
`;

export default LoginButton;
