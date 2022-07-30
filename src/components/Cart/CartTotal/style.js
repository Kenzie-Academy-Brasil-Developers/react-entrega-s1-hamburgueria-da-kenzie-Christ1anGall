import styled from "styled-components";

const CartTotalContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 22px;

  background: var(--color-gray-0);
  .CartTotalInfo {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #e0e0e0;
  }
  h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
  h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-gray-50);
  }
  button {
    height: 4rem;
    background: var(--color-gray-20);
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-gray-50);
    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }
`;

export default CartTotalContainer;
