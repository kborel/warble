import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweetboxComponent from './TweetboxComponent';
import Input from './Input';
import Button from './Button';
import CharacterCount from './CharacterCount';

const propTypes = {
  submitPost: PropTypes.func.isRequired,
};

class Tweetbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      text: target.value,
    });
  }

  onSubmit() {
    this.props.submitPost(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    const { text } = this.state;
    return (
      <TweetboxComponent>
        <Input
          minRows={3}
          placeholder="What's happening?"
          value={this.state.text}
          onChange={this.onInputChange}
          rows="3"
        />
        <CharacterCount>{text.length}</CharacterCount>
        <Button
          disabled={text.length < 1 || text.length > 280}
          onClick={this.onSubmit}
        >
          Post
        </Button>
      </TweetboxComponent>
    );
  }
}

Tweetbox.propTypes = propTypes;

export default Tweetbox;
