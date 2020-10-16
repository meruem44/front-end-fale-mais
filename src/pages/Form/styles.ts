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

      h1 {
          margin-bottom: 20px;
          text-align: center;
      }

      input{
        background-color: #232024;
        border-radius: 10px;
        border: 2px solid #232024;
        padding: 16px;
        width: 70%;
        color: #fff;

        & + input {
          margin-top: 8px;
        }
      }

      button {
        background-color: #923537;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        width: 80%;
        height: 56px;
        transition: background 0.3s;
        color: #fff;
        margin-top: 16px;
        font-size: 20px;
        font-weight: bold;

        &:hover {
          background-color: ${shade(0.25, '#923537')};
        }
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

