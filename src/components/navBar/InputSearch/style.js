import styled from "styled-components";

const InputMain = styled.input`
  background: var(--color-background);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  width: 14.4rem;
  padding: 0 126px 0 10px;
  height: 4rem;

  @media only screen and (min-width: 600px) {
    width: 16rem;
    height: 4rem;
    padding: 0px 160px 0px 24px;
  }
`;

export default InputMain;
