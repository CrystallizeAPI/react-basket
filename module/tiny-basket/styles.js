import styled from 'styled-components';

export const Outer = styled.div``;

export const Items = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;

  img {
    width: 50px;
    margin-right: 10px;
  }
`;
