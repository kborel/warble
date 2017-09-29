import styled from 'styled-components';

export default styled.div`
  max-width: 900px;
  height: 900px;
  margin: 0 auto;

  @media screen and (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-areas:
      "profile timeline"
      "trends timeline"
      "follow timeline"
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(auto, 4);
    grid-template-areas:
      "profile timeline follow"
      "trends timeline follow"
      "trends timeline ."
      ". timeline ."
  }
`;