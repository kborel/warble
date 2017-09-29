import styled from 'styled-components';

export default styled.div`
  height: 900px;

  @media screen and (min-width: 900px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 600px;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-areas:
      "profile timeline"
      "trends timeline"
      "follow timeline"
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 300px 600px 300px;
    grid-template-rows: repeat(auto, 4);
    grid-template-areas:
      "profile timeline follow"
      "trends timeline follow"
      "trends timeline ."
      ". timeline ."
  }
`;