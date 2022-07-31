import styled from "styled-components";

const ButtonMain = styled.button`
  background: var(--color-primary);
  border: 2px solid #27ae60;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  color: white;
  position: relative;
  left: -127px;

  &:hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;

export default ButtonMain;
