import styled from "styled-components";

const CardCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 5rem;
  background: var(--color-gray-0);
  padding: 10px;

  .InfoCardCart {
    display: flex;
    gap: 10px;
  }
  img {
    background: var(--color-gray-20);
    border-radius: 5px;
    height: 5rem;
    width: 5rem;
  }
  h1 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-gray-50);
  }
  button {
    background: transparent;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    border: none;
    margin-top: 10px;
    color: #bdbdbd;
    :hover {
      text-decoration: underline;
      color: var(--color-gray-100);
    }
  }
`;

export default CardCart;
