import styled from 'styled-components';

export default styled.div`
  height: 100%;

  /* was 900px */
  @media screen and (min-width: 600px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 600px;
    grid-template-rows: 150px auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-areas:
      "tweetbox"
      "timeline"
  }

  /* 1200px breakpoint */
`;
