import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

const Form: React.FC = () => {
  return (
      <Container>
          <Content>
            <img src={logoImg} />

            <form>
                <h1>Preencha o formulario e fale conosco</h1>
            
                <input placeholder="Primeiro nome" />
                <input placeholder="Último nome" />
                <input placeholder="Endereço" />
                <input placeholder="Unidade / Apto" />
                <input placeholder="Cidade" />
                <input placeholder="Província / Território" />
                <input placeholder="E-mail" />
            
                <button type='submit'>Enviar</button>

            </form>
            <a href="#">Ver Lista de pedidos <FaClipboardList /></a>

          </Content>
          <Background />
      </Container>
  );
}

export default Form;