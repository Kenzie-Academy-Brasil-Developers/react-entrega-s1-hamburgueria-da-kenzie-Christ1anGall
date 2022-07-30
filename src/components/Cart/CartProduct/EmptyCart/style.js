import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 10rem;
  background: var(--color-gray-0);

  gap: 5px;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-gray-50);
  }
`;

export default List;
