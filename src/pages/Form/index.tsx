import React from 'react';
import { FaClipboardList, FaUserCircle, FaAddressCard , FaMailchimp} from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Form: React.FC = () => {
  return (
      <Container>
          <Content>
            <img src={logoImg} />

            <form>
                <h1>Preencha o formulario e fale conosco</h1>
            
                <Input name="firstName" icon={FaUserCircle}  placeholder="Primeiro nome" />
                <Input name="lastName" icon={FaUserCircle} placeholder="Último nome" />
                <Input name="lastName" icon={FaAddressCard} placeholder="Endereço" />
                <Input name="lastName" icon={FaAddressCard} placeholder="Unidade / Apto" />
                <Input name="lastName" icon={FaAddressCard} placeholder="Cidade" />
                <Input name="lastName" icon={FaAddressCard} placeholder="Província / Território" />
                <Input name="email" icon={FaMailchimp} placeholder="E-mail" />
            
                <Button type='submit'>Enviar</Button>

            </form>
            <a href="#">Ver Lista de pedidos <FaClipboardList /></a>

          </Content>
          <Background />
      </Container>
  );
}

export default Form;