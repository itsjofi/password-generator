import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
  background: #173f5f;

  &:hover {
    cursor: pointer;
    background: #0d7377;
    color: #eeeeee;
  }
`;

export const Container = styled.div`
  background: #eeeeee;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #000;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px 0px;
  border-radius: 8px;

  & > label {
    display: flex;
    justify-content: space-between;
  }
  & > * {
    margin: 8px 0;
    & > input[type='range'] {
      width: 100%;
    }
  }
`;

export const TextField = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #173f5f;

  & > input {
    padding: 1rem;
    border: none;
    outline: none;
    background: transparent;
    color: #eeeeee;
  }
  & > div {
    margin: 8px;
    & :hover {
      cursor: pointer;
    }
    & > svg {
      color: #eeeeee;
    }
  }
`;
