import styled from 'styled-components';
import { shade } from 'polished';

import fundo from '../../assets/fundo.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
      width: 250px;
  }

  form {
      width: 400px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
          margin-bottom: 20px;
          text-align: center;
      }
  }

  a {
    color: #fff;
    display: block;
    text-decoration: none;
    font-size: 20px;
    margin-top: 20px;
    &:hover {
         color: ${shade(0.25, '#fff')};
        }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${fundo}) no-repeat center;
  background-size: cover;
`;

