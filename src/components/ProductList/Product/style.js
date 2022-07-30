import styled from "styled-components";

const ProductContainer = styled.div`
  min-width: 14rem;
  max-width: 14rem;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  margin-top: 2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    text-align: left;
    width: 100%;
    padding-top: 1.5rem;
    padding-left: 2.5rem;
  }
  span {
    width: 100%;
    background: var(--color-gray-0);
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-gray-100);
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-gray-50);
  }

  h5 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }

  button {
    left: 0px;
  }

  img {
    width: 10rem;
    height: 10rem;
  }
`;

export default ProductContainer;
