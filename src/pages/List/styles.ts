import styled from 'styled-components';
import { shade } from 'polished';

import fundo from '../../assets/list.jpg';

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
      width: 200px;
      margin-bottom: 10px;
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


export const ContentList = styled.div`
      width: 400px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 60%;
      overflow: scroll;
      border-radius: 10px;
      border: 2px solid #fff;
      padding: 10px;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
`;

