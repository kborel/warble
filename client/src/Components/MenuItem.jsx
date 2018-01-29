import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5em 0.8em;
  text-decoration: none;
`;

const StyledLink = StyledSpan.withComponent(Link);

const MenuItem = props => (props.to ? <StyledLink {...props} /> : <StyledSpan {...props} />);

export default MenuItem;
