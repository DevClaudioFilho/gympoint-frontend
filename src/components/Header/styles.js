import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      padding-left:20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  a {
    font-size: 15px;
    font-weight: bold;
    color: #999999;
    margin-left: 20px;

    &:hover {
      color: ${darken(0.5, '#999999')};
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
