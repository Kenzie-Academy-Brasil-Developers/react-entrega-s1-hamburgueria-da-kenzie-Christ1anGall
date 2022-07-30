import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2rem;
  min-width: 23rem;

  ul {
    max-height: 22rem;
    min-height: 22rem;
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
`;
