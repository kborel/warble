import styled from 'styled-components';

export default styled.span`
  margin-right: 10px;
  ${props => props.children >= 280 - 20 && props.children < 280 && 'color: orange;'}
  ${props => props.children >= 280 && 'color: red;'}
`;
