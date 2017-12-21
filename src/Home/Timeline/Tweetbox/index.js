import React, { Component } from 'react';
import TweetboxComponent from './TweetboxComponent';
import Input from './Input';
import Button from './Button';
import LetterCount from './LetterCount';

class Tweetbox extends Component {
  constructor(props) {
    super(props);

    this.state= {
      text: '',
    };
  }

  onInputChange = ({ target }) => {
    this.setState({
      text: target.value,
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
        <LetterCount>{text.length}</LetterCount>
        <Button disabled={text < 1}>Post</Button>
      </TweetboxComponent>
    );
  }
}

export default Tweetbox;
