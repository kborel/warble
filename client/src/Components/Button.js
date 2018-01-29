import styled from 'styled-components';

export default styled.button`
  font-size: 1rem;
  font-family: "Segoe UI", serif;
  color: white;
  border-radius: 2em;
  border: none;
  padding: 0.5em 1.5em;
  cursor: pointer;
  background-color: #629110;

  &:hover {
    background-color: #6E9E14;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
