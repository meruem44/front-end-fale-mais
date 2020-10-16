import React from 'react';
import { FaClipboardList} from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background, ContentList } from './styles';

import Card from '../../components/Card';

const List: React.FC = () => {
  return (
      <Container>

        <Background />
          <Content>
            <img src={logoImg} />
            <h1>Lista de Pedidos</h1>
            <ContentList> 
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ContentList>
            <a href="#"> Voltar <FaClipboardList /></a>

          </Content>
      </Container>
  );
}

export default List;