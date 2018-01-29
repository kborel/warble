import styled from 'styled-components';
import Container from './Container';

export default styled.nav`
  display: flex;
  border-bottom: solid 1px lightgray;

  > ${Container} {
    display: flex;
  }
`;
