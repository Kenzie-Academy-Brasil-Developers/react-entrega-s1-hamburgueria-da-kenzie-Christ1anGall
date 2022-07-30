import styled from "styled-components";

const InputMain = styled.input`
  background: var(--color-background);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  min-width: 17.4rem;
  padding: 0 0 0 10px;
  height: 4rem;

  @media only screen and (min-width: 600px) {
    width: 22.5rem;
    height: 4rem;
    padding: 0px 100px 0px 15px;
  }
`;

export default InputMain;
