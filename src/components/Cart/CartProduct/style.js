import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2rem;
  min-width: 19rem;

  ul {
    max-height: 19rem;
    min-height: 19rem;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--color-gray-0);
  }

  p {
    background: var(--color-primary);
    height: 4rem;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 23rem;
    ul {
      max-height: 23rem;
      min-height: 23rem;
    }
  }
`;
