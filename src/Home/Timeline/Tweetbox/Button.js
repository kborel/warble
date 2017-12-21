import styled from 'styled-components';

export default styled.button`
  background-color: dodgerblue;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  height: 35px;
  width: 70px;

  &:disabled {
    background-color: gray;

    &:hover {
      cursor: not-allowed;
    }
  }
`;