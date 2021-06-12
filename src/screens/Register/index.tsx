import React from 'react';
import { View } from 'react-native';
import { Input } from '../../components/common/Input';

import { Container, Header, Title, Form } from './styles';


export function Register() {
  return (
    <Container>
      <Header>
        <Title>
          Cadastro
        </Title>
      </Header>
      <Form>
      <Input
      placeholder="nome"
      />
           <Input
      placeholder="preço"
      />
      </Form>
      
    </Container>
  );
}