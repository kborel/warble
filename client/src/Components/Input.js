import styled from 'styled-components';

export default styled.input`
  width: 400px;
  border-radius: 3px;
  border-color: rgb(230, 236, 240);
  border-style: solid;
  border-width: 1px;
  margin-bottom: 25px;
  padding: 15px;

  font-weight: bold;
  font-size: 18px;
  &::placeholder {
    color: lightgray;
  }

  &:focus {
    border-color: lightblue;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
  } 
`;
