import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  background: #ee4d64;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 360px;
  height: 448px;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  img {
    margin: 50px auto 20px;
  }
  h1 {
    margin: 0 0 10px 30px;
    text-align:left;
    font-size: 14px;
    color: #444444;
    margin-top: 30px;
  }
  input {
    width: 300px;
    height: 45px;
    border-radius: 4px;
    border-width: 1px;
    border: 1px solid #DDDDDD;
    &::placeholder {
      padding: 15px 0 15px 5px;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px bold;
    border: 0;
    border-radius: 4px;
    padding: 13px 87px;
    margin: 15px auto;
    width: 300px;
    height: 45px;
    background: #ee4d64;
    color: #fff;

    &:hover {
      background: ${darken(0.1, '#ee4d64')};
    }
  }
`;
