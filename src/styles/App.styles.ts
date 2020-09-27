import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
  background: #080942;
  cursor: pointer;
`;

export const Container = styled.div`
  background: #080942;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #221c69;
  color: #fff;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px 0px;
  border-radius: 8px;
  min-width: 350px;

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
  background: #080942;

  & > input {
    width: 100%;
    padding: 1rem;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
  }
  & > div {
    margin: 8px;
    background: #221c69;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    & > svg {
      margin: 12px;
    }
  }
`;
