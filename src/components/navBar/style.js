import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  background: var(--color-gray-0);
  align-items: center;

  img {
    width: 10rem;
    height: 3rem;
  }

  form {
    display: flex;
    align-items: center;

    width: 300px;
  }
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    gap: 33rem;
    flex-direction: row;
    padding: 1rem 12rem;
  }
`;

export default ContainerHeader;
