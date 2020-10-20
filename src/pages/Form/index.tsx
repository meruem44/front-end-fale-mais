import React from 'react';
import { FaClipboardList, FaUserCircle, FaAddressCard , FaMailchimp} from 'react-icons/fa';
import { Form } from '@unform/web';
import * as yup from 'yup';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const PageForm: React.FC = () => {

  const handleSubmit = (data: object) => {

    const schema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      address: yup.string().required('Nome é obrigatório'),
      address2: yup.string().required('Nome é obrigatório'),
      city: yup.string().required('Nome é obrigatório'),
      province: yup.string().required('Nome é obrigatório'),
      email: yup.string().email('E-mail inválido').required('Nome é obrigatório')
    });

    console.log(data);
  };

  return (
      <Container>
          <Content>
            <img src={logoImg} />

            <Form onSubmit={handleSubmit} >
                <h1>Preencha o formulario e fale conosco</h1>
            
                <Input name="name" maxLength={80} icon={FaUserCircle}  placeholder="Nome"/>
                <Input name="address"  maxLength={128} icon={FaAddressCard} placeholder="Endereço" />
                <Input name="address2" maxLength={128} icon={FaAddressCard} placeholder="Unidade / Apto" />
                <Input name="city"  maxLength={32} icon={FaAddressCard} placeholder="Cidade" />
                <Input name="province"  maxLength={32} icon={FaAddressCard} placeholder="Província / Território" />
                <Input name="email" maxLength={128} icon={FaMailchimp} placeholder="E-mail" />
            
                <Button type='submit'>Enviar</Button>

            </Form>

            <a href="#">Ver Lista de pedidos <FaClipboardList /></a>

          </Content>
          <Background />
      </Container>
  );
}

export default PageForm;