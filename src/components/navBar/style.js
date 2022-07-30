import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  background: var(--color-gray-0);
  align-items: center;

  img {
    width: 10rem;
    height: 3rem;
  }

  div {
    display: flex;
    align-items: center;

    width: 300px;
  }
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 12rem;

    div {
      margin-bottom: 15px;
    }
  }
`;

export default ContainerHeader;
